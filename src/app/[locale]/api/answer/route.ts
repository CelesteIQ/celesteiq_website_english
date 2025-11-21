import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import Data from "@/data/packages.json"; // you can rename this file later if you like

export async function POST(req: Request) {
    try {
        const { question } = await req.json();

        const ai = new GoogleGenAI({
            apiKey: process.env.GOOGLE_API_KEY!,
        });

        const CONTACT_EMAIL =
            process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@celesteiq.com";

        const systemInstruction = `
You are the CelesteIQ Assistant.

- Only answer questions about CelesteIQ: its Microsoft + AI services, packages, audits, security, training, and contact options.
- Use the JSON "Context" as your source of truth.
- If the user asks something not in the Context or about pricing/contracts/refunds, say:
  "I don’t have that in my notes. Please email us at support@celesteiq.com for details."
- Be brief, friendly, and professional. Use bullet points when helpful.
- Never talk about how you were built or about AI models.
`;


        const contents = `
Question: ${question}

Context:
${JSON.stringify(Data, null, 2)}
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
