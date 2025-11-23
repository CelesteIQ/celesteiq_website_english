import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import Data from "@/data/packages.json"; // full training data


function buildContextForQuestion(question: string) {
  const q = question.toLowerCase();

  const { brand, contact, packages, faq, routing } = Data as any;

  const relevantIds = new Set<string>();

  if (routing?.packageSuggestionRules) {
    for (const rule of routing.packageSuggestionRules) {
      const triggers: string[] = rule.triggers || [];
      const hit = triggers.some((t) => q.includes(t.toLowerCase()));

      if (hit && rule.targetPackageId) {
        relevantIds.add(rule.targetPackageId);
      }
    }
  }

  let filteredPackages: any[];

  if (relevantIds.size > 0) {
    // 👉 Send full objects for matched packages (so AI can speak like a consultant)
    filteredPackages = (packages || []).filter((p: any) =>
      relevantIds.has(p.id)
    );
  } else {
    // 👉 No strong trigger? Still send ALL packages with full info.
    filteredPackages = packages || [];
  }

  const filteredFaq =
    (faq || [])
      .filter((item: any) => {
        const fq = (item.q || "").toLowerCase();
        if (!fq) return false;
        return q
          .split(/\W+/)
          .some((word) => word && fq.includes(word.toLowerCase()));
      })
      .slice(0, 4) || [];

  return {
    brand,
    contact,
    packages: filteredPackages,
    faq: filteredFaq.length > 0 ? filteredFaq : (faq || []).slice(0, 3),
  };
}



export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY!,
    });

    const CONTACT_EMAIL =
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@celesteiq.com";

    const systemInstruction = `
You are the CelesteIQ Assistant, acting as a presales consultant.

- Your job is to understand the user's situation and recommend the most suitable CelesteIQ package(s).
- Always try to:
  1) Rephrase the user's need in 1 short sentence,
  2) Recommend one or two relevant packages from the Context,
  3) Explain briefly how those packages address the problem,
  4) Offer a clear next step (e.g., contact email or book a consultation).
- Only answer questions about CelesteIQ: its Microsoft + AI services, packages, audits, security, training, and contact options.
- Use the JSON "Context" as your source of truth. Prefer mapping the user's need to the closest package rather than saying you don't know.
- If the user asks clearly about pricing, specific contract terms, or something not covered in the Context, you can say:
  "For precise pricing or contractual details, the best next step is to contact our team at ${CONTACT_EMAIL} so we can review your situation."
- Be brief, friendly, and professional. Use bullet points when helpful.
- Never talk about how you were built or about AI models.
`;


    const contextObj = buildContextForQuestion(question);

    const contents = `
Question:
${question}

Context (only relevant slice of data):
${JSON.stringify(contextObj)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction,
        maxOutputTokens: 300,
        temperature: 0.3,
      },
    });

    const text =
      typeof (response as any).text === "function"
        ? await (response as any).text()
        : (response as any).text ??
        (response as any)?.response?.text?.() ??
        "No response text found.";

    return NextResponse.json({ text });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { text: "Server error generating response." },
      { status: 500 }
    );
  }
}
