"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-foreground/20 pb-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-lg font-medium text-foreground md:text-2xl">
          {question}
        </span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-foreground">
          <motion.img
            src="/figma/icon-plus.svg"
            alt=""
            className="h-6 w-6"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-foreground/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
