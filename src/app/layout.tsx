import type { Metadata } from "next";
import { degular, carlaSans, neueMontreal, fragmentMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thais Frasson | Nutricionista",
  description:
    "Nutrição descomplicada, feita para a sua rotina real. Acompanhamento nutricional com Thais Frasson.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${degular.variable} ${carlaSans.variable} ${neueMontreal.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
