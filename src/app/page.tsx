import Image from "next/image";
import {
  ClipboardText,
  Target,
  ChartLineUp,
  Headset,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn, Stagger, StaggerItem, AnimatedWords } from "@/components/motion";
import { NavServicesMenu } from "@/components/nav-services-menu";
import { FaqItem } from "@/components/faq-item";

const differentiators = [
  {
    title: "Avaliação Completa",
    description: "Diagnóstico real da sua composição corporal.",
    icon: ClipboardText,
  },
  {
    title: "Plano Personalizado",
    description: "Feito pra sua vida, não pra uma média.",
    icon: Target,
  },
  {
    title: "Análise Funcional",
    description: "Mapeamento do que seu corpo realmente precisa.",
    icon: ChartLineUp,
  },
  {
    title: "Suporte Flexível",
    description: "Acompanhamento contínuo entre as consultas.",
    icon: Headset,
  },
];

const services = [
  {
    title: "Nutrição Personalizada",
    description: "Um plano construído pra sua rotina, seu corpo e seus objetivos.",
  },
  {
    title: "Bioimpedância",
    description: "Avaliação completa da composição corporal, com acompanhamento real.",
  },
  {
    title: "Mapeamento Nutricional",
    description: "Entenda o que seu corpo precisa antes de qualquer mudança.",
  },
  {
    title: "E-books e Materiais",
    description: "Receitas e dicas práticas pra aplicar no seu dia a dia.",
  },
];

const benefitsLeft = [
  "Consultas online ou presenciais",
  "Ambiente acolhedor, sem julgamento",
  "Suporte contínuo via WhatsApp",
];

const benefitsRight = [
  "Materiais extras: e-books e receitas",
  "Plano revisado conforme sua evolução",
  "Acompanhamento com dados reais",
];

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Começamos com uma anamnese completa, entendendo sua rotina, histórico de saúde e objetivos, antes de montar qualquer plano.",
  },
  {
    question: "Atende convênio?",
    answer:
      "Entre em contato pelo WhatsApp pra confirmar a disponibilidade de atendimento via convênio ou reembolso.",
  },
  {
    question: "As consultas são presenciais ou online?",
    answer: "Os dois formatos estão disponíveis, de acordo com a sua preferência e disponibilidade.",
  },
  {
    question: "Preciso fazer exames antes?",
    answer:
      "Não é obrigatório para a primeira consulta, mas exames recentes ajudam a aprofundar a avaliação inicial.",
  },
  {
    question: "Como funciona o suporte via WhatsApp?",
    answer:
      "Entre as consultas, você pode tirar dúvidas e receber ajustes pontuais diretamente pelo WhatsApp.",
  },
];

function GradientButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="cursor-pointer rounded-md bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] bg-left px-7 py-3.5 text-sm font-medium text-background transition-[background-position] duration-500 ease-out hover:bg-right"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <FadeIn className="absolute inset-x-0 top-0 z-50">
        <header>
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3">
            <img
              src="/logo/logo-horizontal-02.svg"
              alt="Thais Frasson Nutricionista"
              className="h-12 w-auto"
            />
            <nav className="hidden items-center gap-7 text-sm font-medium text-foreground md:flex">
              <a href="#" className="hover:text-primary">Home</a>
              <a href="#sobre" className="hover:text-primary">Quem sou</a>
              <NavServicesMenu />
              <a href="#depoimentos" className="hover:text-primary">Resultados</a>
            </nav>
            <GradientButton href="#contato">Agendar Consulta</GradientButton>
          </div>
        </header>
      </FadeIn>

      <main>
        {/* Hero */}
        <section className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/figma/image-hero.png"
              alt="Thais Frasson em seu consultório"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-50% to-transparent to-65%" />
          </div>

          <div className="relative mx-auto flex h-full min-h-screen max-w-[1280px] flex-col justify-end gap-16 px-5 pt-36 md:pt-44">
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex max-w-[744px] flex-col items-start gap-5">
                <FadeIn className="flex items-center gap-5 font-mono text-xs tracking-[0.25em] text-foreground">
                  <span>THAIS FRASSON</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>NUTRICIONISTA</span>
                </FadeIn>
                <h1 className="max-w-[744px] font-display text-4xl font-normal leading-[1.1] text-foreground md:text-5xl lg:text-[56px]">
                  <AnimatedWords text="Nutrição descomplicada," delay={0.1} />
                  <br />
                  <AnimatedWords
                    text="feita para a sua rotina ideal."
                    wordClassName="text-secondary"
                    delay={0.35}
                  />
                </h1>
                <FadeIn delay={0.5}>
                  <p className="max-w-[592px] text-base leading-relaxed text-foreground">
                    Chega de dietas que não cabem na sua vida. Acompanhamento
                    nutricional que une ciência, escuta e prazer alimentar — pra
                    você sustentar processos de verdade.
                  </p>
                </FadeIn>
                <FadeIn delay={0.65}>
                  <GradientButton href="#contato">Agendar Consulta</GradientButton>
                </FadeIn>
              </div>

              <Stagger className="flex divide-x divide-white/30 overflow-hidden rounded-xl" stagger={0.1}>
                {[
                  ["+2 anos", "de experiência"],
                  ["+150", "pacientes atendidos"],
                  ["4.9/5", "avaliação"],
                ].map(([stat, label]) => (
                  <StaggerItem
                    key={label}
                    className="flex flex-col items-center justify-center gap-1.5 bg-foreground/20 px-5 py-5 text-center text-white backdrop-blur-md"
                  >
                    <span className="font-display text-2xl font-medium">{stat}</span>
                    <span className="text-sm">{label}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* Diferenciais */}
            <Stagger className="grid grid-cols-1 border-t border-l border-foreground/20 bg-white sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <StaggerItem
                  key={item.title}
                  className="flex h-[260px] flex-col justify-between border-r border-b border-foreground/20 p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center bg-primary">
                    <item.icon size={24} weight="light" className="text-background" />
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-xl font-medium text-secondary">
                      {item.title}
                    </h3>
                    <p className="max-w-[200px] text-sm leading-snug text-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Serviços intro */}
        <section id="servicos" className="bg-secondary px-5 py-24">
          <FadeIn className="mx-auto flex max-w-[1280px] flex-col gap-5">
            <span className="font-mono text-xs tracking-[0.25em] text-background">
              SERVIÇOS
            </span>
            <h2 className="max-w-xl font-display text-4xl font-normal text-background md:text-6xl">
              <AnimatedWords text="O que eu trabalho" />
              <br />
              <AnimatedWords text="com você?" delay={0.25} />
            </h2>
          </FadeIn>
        </section>

        {/* Grid de serviços */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="flex h-[600px] flex-col justify-end gap-5 border-r border-t border-foreground/20 bg-white p-10 last:border-r-0"
            >
              <h3 className="font-display text-2xl font-medium text-secondary">
                {service.title}
              </h3>
              <p className="max-w-[260px] text-base leading-snug text-foreground">
                {service.description}
              </p>
              <a
                href="#contato"
                className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground hover:text-secondary"
              >
                Saiba mais
                <span aria-hidden="true">→</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Sobre */}
        <section id="sobre" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[752px]">
            <Image
              src="/figma/about-photo.png"
              alt="Thais Frasson no consultório"
              fill
              className="object-cover"
            />
          </div>
          <Stagger className="flex flex-col justify-center gap-10 bg-primary px-8 py-16 lg:px-16 lg:py-32">
            <StaggerItem>
              <h2 className="max-w-xl font-display text-4xl font-normal leading-tight text-background md:text-5xl">
                Quem te acompanha
                <br />
                <span className="font-medium text-accent">nessa jornada?</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-lg leading-[1.8] text-background">
                Sou a Thais Frasson, nutricionista formada pelo Centro
                Universitário de Brasília (UniCEUB), com pós-graduação em
                Nutrição Clínica Funcional e especialização em Doenças
                Autoimunes. Acredito em nutrição sem culpa — com ciência,
                acolhimento e consistência.
              </p>
            </StaggerItem>
            <StaggerItem>
              <a
                href="https://instagram.com/nutrithaisfrasson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit cursor-pointer rounded-md bg-secondary px-7 py-3.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-background hover:text-primary"
              >
                Saiba mais
              </a>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Benefícios */}
        <section className="bg-secondary px-5 py-10">
          <Stagger className="mx-auto flex max-w-[1280px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <StaggerItem>
              <h2 className="max-w-xs font-display text-3xl font-medium leading-tight text-background">
                Pensado para respeitar a sua rotina.
              </h2>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-2">
              {benefitsLeft.map((b) => (
                <div key={b} className="flex items-center gap-2 text-background">
                  <img src="/figma/icon-check-circle.svg" alt="" className="h-6 w-6" />
                  <span className="text-lg font-medium">{b}</span>
                </div>
              ))}
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-2">
              {benefitsRight.map((b) => (
                <div key={b} className="flex items-center gap-2 text-background">
                  <img src="/figma/icon-check-circle.svg" alt="" className="h-6 w-6" />
                  <span className="text-lg font-medium">{b}</span>
                </div>
              ))}
            </StaggerItem>
          </Stagger>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-white px-5 py-24 text-center">
          <FadeIn>
            <span className="font-mono text-xs tracking-[0.25em] text-secondary">
              DEPOIMENTOS
            </span>
          </FadeIn>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-normal text-foreground md:text-6xl">
            <AnimatedWords text="O que dizem as pacientes" className="justify-center" />
          </h2>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
          <FadeIn className="flex flex-col justify-center gap-10 bg-white py-16 pl-5 pr-8 lg:py-20 lg:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] lg:pr-16">
            <img src="/figma/quote-open.svg" alt="" className="h-9 w-9" />
            <p className="max-w-[640px] text-xl leading-relaxed text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sagittis eros sed erat consequat accumsan. Etiam
              ligula arcu, dapibus in aliquet sit amet, semper eu purus. Fusce
              non enim est. Integer id risus quam. Aliquam varius viverra
              risus, sit amet tincidunt nibh porttitor sit amet. Morbi ipsum
              mi, iaculis id vestibulum vitae, dictum at metus. Vivamus sed
              aliquam nibh. Praesent nec metus viverra, venenatis neque vitae,
              blandit ligula. Mauris vehicula eleifend lorem, sit amet maximus
              ante pulvinar ut.
            </p>
            <img src="/figma/quote-close.svg" alt="" className="h-9 w-9 self-end" />
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-between gap-10 bg-secondary px-8 py-16 lg:px-16 lg:py-20">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Depoimento anterior"
                className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-background"
              >
                <img src="/figma/icon-arrow-left.svg" alt="" className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-background/0 bg-background/10"
              >
                <img src="/figma/icon-arrow-left.svg" alt="" className="h-6 w-6 rotate-180" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <span className="block h-20 w-20 rounded-full bg-background/30" />
              <div className="flex flex-col gap-1">
                <p className="font-display text-[56px] leading-tight text-accent">Ana Maria Silva</p>
                <p className="text-[32px] text-background">Empreendedora</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* FAQ */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-5">
            <div className="flex flex-col items-center gap-5 text-center">
              <FadeIn>
                <span className="font-mono text-xs tracking-[0.25em] text-secondary">FAQ</span>
              </FadeIn>
              <h2 className="font-display text-4xl font-normal text-foreground md:text-6xl">
                <AnimatedWords text="Perguntas frequentes" className="justify-center" />
              </h2>
            </div>
            <Stagger className="flex w-full flex-col gap-8" stagger={0.08}>
              {faqs.map((faq) => (
                <StaggerItem key={faq.question}>
                  <FaqItem question={faq.question} answer={faq.answer} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA final */}
        <section id="contato" className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex min-h-[520px] flex-col justify-center gap-10 overflow-hidden bg-primary px-5 py-16 lg:min-h-[752px] lg:py-32 lg:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] lg:pr-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/graphics/circulos-concentricos-01.png"
                alt=""
                width={3840}
                height={3840}
                quality={100}
                className="absolute max-w-none"
                style={{ width: "300%", height: "300%", left: "-200%", top: "-100%" }}
              />
            </div>
            <div className="relative flex max-w-[534px] flex-col gap-5">
              <FadeIn>
                <span className="font-mono text-xs tracking-[0.25em] text-accent">
                  FALE COMIGO
                </span>
              </FadeIn>
              <h2 className="font-display text-5xl font-normal leading-[1.1] text-background md:text-7xl">
                <AnimatedWords text="Sua melhor versão começa a um passo." />
              </h2>
            </div>
            <FadeIn delay={0.4} className="relative flex flex-wrap gap-5">
              <a
                href="https://wa.me/5562999631212"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-md bg-secondary px-7 py-3.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-background hover:text-primary"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#"
                className="cursor-pointer rounded-md border border-secondary px-7 py-3.5 text-sm font-medium text-background transition-colors duration-200 hover:border-background"
              >
                Agendar consulta
              </a>
            </FadeIn>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[752px]">
            <Image
              src="/figma/cta-photo.png"
              alt="Thais Frasson"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary px-5 py-20 text-background">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-stretch">
            <div className="flex max-w-sm flex-col items-start gap-10">
              <img
                src="/logo/logo-circular-01.svg"
                alt="Thais Frasson"
                className="h-[146px] w-auto"
              />
              <div className="flex flex-col gap-5">
                <p className="font-display text-2xl font-normal leading-snug">
                  Nutrição descomplicada,
                  <br />
                  <span className="font-medium text-secondary">
                    feita para a sua rotina ideal.
                  </span>
                </p>
                <p className="text-sm leading-relaxed">
                  Chega de dietas que não cabem na sua vida. Acompanhamento
                  nutricional que une ciência, escuta e prazer alimentar — pra
                  você sustentar processos de verdade.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-16 sm:flex-row lg:gap-6">
              <div className="flex h-full flex-col justify-between gap-6">
                <span className="font-mono text-xs tracking-[0.25em] text-secondary">(01)</span>
                <span className="font-mono text-sm tracking-[0.3em] text-accent">NAVEGUE</span>
                <ul className="flex flex-col gap-5 text-sm">
                  <li><a href="#sobre" className="transition-colors duration-200 hover:text-accent">Sobre mim</a></li>
                  <li><a href="#depoimentos" className="transition-colors duration-200 hover:text-accent">Depoimentos</a></li>
                  <li><a href="#depoimentos" className="transition-colors duration-200 hover:text-accent">Resultados</a></li>
                  <li><a href="#faq" className="transition-colors duration-200 hover:text-accent">FAQ</a></li>
                </ul>
              </div>

              <div className="flex h-full flex-col justify-between gap-6">
                <span className="font-mono text-xs tracking-[0.25em] text-secondary">(02)</span>
                <span className="font-mono text-sm tracking-[0.3em] text-accent">SERVIÇOS</span>
                <ul className="flex flex-col gap-5 text-sm">
                  {services.map((s) => (
                    <li key={s.title}>{s.title}</li>
                  ))}
                </ul>
              </div>

              <div className="flex h-full flex-col justify-between gap-6">
                <span className="font-mono text-xs tracking-[0.25em] text-secondary">(03)</span>
                <span className="font-mono text-sm tracking-[0.3em] text-accent">CONTATO</span>
                <ul className="flex flex-col gap-5 text-sm">
                  <li>(62) 99963-1212</li>
                  <li>nutrithaisfrasson@gmail.com</li>
                  <li>ALD Center — Posse, GO</li>
                  <li>
                    <a
                      href="https://instagram.com/nutrithaisfrasson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-accent"
                    >
                      @nutrithaisfrasson
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-background/20" />

          <div className="flex flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center">
            <span>CRN 00000000</span>
            <a
              href="https://devzdesign.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
            >
              <span>desenvolvido por</span>
              <img src="/figma/dev-badge.svg" alt="Devz Design" className="h-[17px] w-auto" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
