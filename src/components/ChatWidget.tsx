// app/components/chat-widget.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  Send,
  X,
  Bot,
  User,
  Minus,
  Loader2,
} from "lucide-react";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  time?: string;
};

const initialMessages: Message[] = [
  {
    id: "m1",
    role: "bot",
    content:
      "Hi! I’m the CelesteIQ assistant. Ask me anything about our packages, audits, or Microsoft + AI solutions.",
    time: "Now",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);

  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // 🔥 NEW: ref for auto-scroll
  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  // 🔥 NEW: whenever messages change, scroll to bottom
  React.useEffect(() => {
    if (!open) return; // only scroll if chat is open
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function handleAsk() {
    if (!input.trim() || loading) return;

    const question = input.trim();
    setInput("");

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: question,
      time: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      const botText =
        data?.text || "I couldn’t get a response right now. Please try again.";

      const botMessage: Message = {
        id: `b-${Date.now()}`,
        role: "bot",
        content: botText,
        time: "Now",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const botMessage: Message = {
        id: `b-error-${Date.now()}`,
        role: "bot",
        content: "Something went wrong while answering. Please try again.",
        time: "Now",
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat panel */}
      {open && !minimized && (
        <div className="mb-3 w-[min(380px,calc(100vw-2rem))] sm:w-[380px]">
          <Card className="overflow-hidden rounded-2xl py-0 border border-orange-200 shadow-[0_24px_60px_rgba(2,6,23,0.18)]">
            <CardHeader className="space-y-0 border-b bg-gradient-to-r from-orange-100 to-orange-50 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FF7A00] text-white">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-base leading-tight">
                      CelesteIQ Assistant
                    </CardTitle>
                    <p className="text-xs text-slate-600">
                      {loading ? "Typing…" : "Online • Ask anything"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Minimize chat"
                    onClick={() => setMinimized(true)}
                    className="h-8 w-8 text-slate-600 hover:bg-orange-100"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close chat"
                    onClick={() => setOpen(false)}
                    className="h-8 w-8 text-slate-600 hover:bg-orange-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <ScrollArea className="h-[360px] px-4 pt-3 pb-4">
                <div className="space-y-4">
                  {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} />
                  ))}

                  {loading && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span>Thinking…</span>
                    </div>
                  )}

                  {messages.length === 0 && !loading && (
                    <p className="text-sm text-muted-foreground">
                      Hi, how are you?
                    </p>
                  )}

                  {/* 🔥 NEW: scroll target */}
                  <div ref={bottomRef} />
                </div>
              </ScrollArea>

              <Separator />

              {/* Composer */}
              <form
                className="flex items-end gap-2 p-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk();
                }}
              >
                <Textarea
                  placeholder="Ask about packages, audits, pricing..."
                  className="min-h-[44px] max-h-[120px] resize-none"
                  value={input}
                  disabled={loading}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleAsk();
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-[#FF7A00] hover:bg-[#ea580c]"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Minimized bar */}
      {open && minimized && (
        <div className="mb-3 w-[min(380px,calc(100vw-2rem))] sm:w-[380px]">
          <button
            aria-label="Restore chat"
            onClick={() => setMinimized(false)}
            className="
              flex w-full items-center justify-between
              rounded-xl border border-orange-200 bg-white/90 px-3 py-2
              text-left shadow-sm backdrop-blur transition hover:bg-white
            "
          >
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF7A00] text-white">
                <Bot className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <p className="font-medium leading-tight">
                  CelesteIQ Assistant
                </p>
                <p className="text-xs text-slate-500">Click to reopen chat</p>
              </div>
            </div>
            <X
              className="h-4 w-4 text-slate-500"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                setMinimized(false);
              }}
            />
          </button>
        </div>
      )}

      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open chat"
          className="
            relative grid h-14 w-14 place-items-center 
            transition hover:scale-105 
          "
        >
          <Image
            src={"/bot.png"}
            width={100}
            height={100}
            alt="bot"
            className="z-10"
          />
        </button>
      )}
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isBot = message.role === "bot";

  return (
    <div
      className={`flex items-start gap-2 ${
        isBot ? "" : "justify-end text-right"
      }`}
    >
      {/* Avatar */}
      {isBot ? (
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-orange-100 text-[#FF7A00]">
          <Bot className="h-4 w-4" />
        </span>
      ) : (
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-slate-700">
          <User className="h-4 w-4" />
        </span>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
          isBot
            ? "bg-orange-50 text-slate-800 ring-1 ring-orange-200"
            : "bg-white text-slate-900 ring-1 ring-slate-200"
        }`}
      >
        {isBot ? (
          <div className="prose prose-xs sm:prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="text-[13.5px] whitespace-pre-wrap">
            {message.content}
          </p>
        )}

        {message.time && (
          <div className="mt-1.5 text-[11px] text-slate-500">
            {message.time}
          </div>
        )}
      </div>
    </div>
  );
}
