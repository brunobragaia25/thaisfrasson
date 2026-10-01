"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  NotePencil,
  Scales,
  MagnifyingGlass,
  BookOpen,
  CaretDown,
} from "@phosphor-icons/react";

const items = [
  {
    title: "Nutrição Personalizada",
    description: "Um plano construído pra sua rotina, seu corpo e seus objetivos.",
    icon: NotePencil,
  },
  {
    title: "Bioimpedância",
    description: "Avaliação completa da composição corporal, com acompanhamento real.",
    icon: Scales,
  },
  {
    title: "Mapeamento Nutricional",
    description: "Entenda o que seu corpo precisa antes de qualquer mudança.",
    icon: MagnifyingGlass,
  },
  {
    title: "E-books e Materiais",
    description: "Receitas e dicas práticas pra aplicar no seu dia a dia.",
    icon: BookOpen,
  },
];

export function NavServicesMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#servicos" className="flex items-center gap-1.5 hover:text-primary">
        Serviços
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <CaretDown size={14} weight="bold" />
        </motion.span>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"
          >
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-white p-3 shadow-2xl">
              <div className="grid grid-cols-2 gap-1">
                {items.map((item) => (
                  <a
                    key={item.title}
                    href="#servicos"
                    className="group/item flex flex-col gap-2 rounded-xl p-4 transition-colors duration-150 hover:bg-background"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-150 group-hover/item:bg-primary group-hover/item:text-background">
                      <item.icon size={18} weight="light" />
                    </span>
                    <span className="font-display text-sm font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="text-xs leading-snug text-foreground/60">
                      {item.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
