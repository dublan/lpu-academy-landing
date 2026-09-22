import { useState } from "react";
import {
  Check,
  GraduationCap,
  Menu,
  ShieldCheck,
  TrendingUp,
  X,
} from "lucide-react";
import { LINKS, SOCIAL_HANDLES } from "./config";
import NosotrosCarousel from "./components/NosotrosCarousel";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const CHECKLIST = [
  {
    title: "Educación Abierta",
    desc: "Clases y recursos libres, sin muros de pago.",
  },
  {
    title: "Análisis Colaborativo",
    desc: "Ideas y gráficos compartidos por la comunidad.",
  },
  {
    title: "Entorno Seguro",
    desc: "Cero cursos VIP, cero promesas falsas.",
  },
];

const FEATURES = [
  {
    icon: GraduationCap,
    tag: "Aprende a tu ritmo",
    title: "Educación desde Cero",
    desc: "Conceptos básicos, gestión de riesgo y lectura de gráficos explicados en lenguaje simple. Ideal si vienes de TikTok o Instagram y nunca operaste.",
    points: ["Glosario sin tecnicismos", "Rutas por niveles", "Ejemplos reales"],
  },
  {
    icon: ShieldCheck,
    tag: "Comunidad protegida",
    title: "Protección contra Estafas",
    desc: "Te enseñamos a detectar esquemas Ponzi, señales milagro y falsos gurús. Aquí nadie te va a pedir dinero por un VIP.",
    points: ["Alertas de estafas comunes", "Reglas anti-spam", "Moderación activa"],
  },
  {
    icon: TrendingUp,
    tag: "Siempre actualizado",
    title: "Análisis y Noticias al Día",
    desc: "Resumen diario del mercado, niveles clave y contexto macro para que entiendas el porqué de cada movimiento.",
    points: ["Resumen diario", "Calendario económico", "Análisis colaborativo"],
  },
];

function WhatsAppButton({ variant = "accent", className = "", children, label }) {
  const styles =
    variant === "accent"
      ? "bg-accent hover:bg-accent-dark text-white shadow-[0_12px_30px_-8px_rgba(0,200,83,0.7)]"
      : "bg-white hover:bg-mist text-ink shadow-lg";
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || "Unirme al grupo de WhatsApp de LPU Academy"}
      className={`inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-7 py-4 text-base font-bold transition-all active:scale-[0.98] ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      {children || "Unirme al WhatsApp"}
    </a>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-brand shadow-[0_4px_20px_rgba(0,82,255,0.35)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-extrabold text-brand text-lg">
              L
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              LPU <span className="font-medium opacity-90">Academy</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex">
            <a href="#beneficios" className="hover:text-white">Beneficios</a>
            <a href="#nosotros" className="hover:text-white">Nosotros</a>
            <a href="#redes" className="hover:text-white">Redes</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Unirme al WhatsApp
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
              className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-white/15 bg-brand px-4 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-1 text-white font-medium">
              <a href="#beneficios" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 hover:bg-white/10">Beneficios</a>
              <a href="#nosotros" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 hover:bg-white/10">Nosotros</a>
              <a href="#redes" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 hover:bg-white/10">Redes sociales</a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 font-bold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Unirme al WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section id="inicio" className="relative overflow-hidden bg-brand">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5) 0, transparent 28%), radial-gradient(circle at 85% 10%, rgba(255,255,255,0.35) 0, transparent 26%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.25) 0, transparent 30%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-24 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              100% Libre y Gratuito
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Formación e Información de Trading{" "}
              <span className="underline decoration-accent decoration-4 underline-offset-4">
                100% Libre y Gratuita
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0">
              Cero cursos VIP. Cero estafas. Aprende desde cero, comparte análisis
              y mantente al día con una comunidad transparente en WhatsApp.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
              <WhatsAppButton label="Unirme gratis al WhatsApp de LPU Academy">
                Entrar gratis al WhatsApp
              </WhatsAppButton>
              <p className="text-sm text-white/70">
                Sin tarjeta • Sin permanencia • Sales en 1 clic
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-white/85 lg:justify-start">
              <div><p className="text-xl font-extrabold text-white">+2.5k</p><p className="text-xs">miembros activos</p></div>
              <div className="h-8 w-px bg-white/25" />
              <div><p className="text-xl font-extrabold text-white">100%</p><p className="text-xs">gratis, siempre</p></div>
              <div className="h-8 w-px bg-white/25" />
              <div><p className="text-xl font-extrabold text-white">0</p><p className="text-xs">cursos VIP</p></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">LPU Academy</p>
                  <h2 className="text-xl font-extrabold">Comunidad Transparente</h2>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {CHECKLIST.map((item) => (
                  <li key={item.title} className="flex gap-3 rounded-2xl bg-mist p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-sm text-ink/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand-dark"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quiero ser parte
              </a>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-[56px] w-full sm:h-[80px]" aria-hidden="true">
          <path d="M0,60 C360,110 1080,0 1440,50 L1440,90 L0,90 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* 3. FEATURES */}
      <section id="beneficios" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand">¿Por qué LPU?</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-extrabold sm:text-4xl">
            Todo lo que necesitas, sin pagar un VIP
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <article
                key={f.title}
                className={`rounded-3xl border p-6 text-left shadow-lg sm:p-7 ${i === 1 ? "border-brand/15 bg-mist" : "border-slate-100 bg-white"}`}
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}>
                  <f.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-accent-dark">{f.tag}</p>
                <h3 className="mt-1 text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.desc}</p>
                <ul className="mt-4 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-medium">
                      <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl scroll-mt-24 text-center text-sm text-ink/60">
            Somos una comunidad abierta: no vendemos señales milagro ni cursos de miles de dólares.
            Compartimos educación, análisis y noticias para que operes con criterio y gestión de riesgo.
          </p>
        </div>
      </section>

      <NosotrosCarousel />

      {/* 5. REDES */}
      <section id="redes" className="scroll-mt-20 bg-navy py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">Síguenos y aprende cada día</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/65">
            Contenido corto y directo en TikTok e Instagram. Luego profundizamos todo en WhatsApp.
          </p>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de LPU Academy"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-100 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white"><TikTokIcon /></span>
              <span><span className="block font-extrabold">TikTok</span><span className="block text-sm text-ink/60">{SOCIAL_HANDLES.tiktok}</span></span>
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de LPU Academy"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-100 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] text-white"><InstagramIcon className="h-6 w-6" /></span>
              <span><span className="block font-extrabold">Instagram</span><span className="block text-sm text-ink/60">{SOCIAL_HANDLES.instagram}</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-navy text-white/75">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-extrabold text-lg">L</span>
              <span className="text-lg font-extrabold">LPU Academy</span>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-white/55">
            Aviso de riesgo: el trading de instrumentos financieros conlleva un alto nivel de riesgo y puede
            no ser adecuado para todos. El contenido de LPU Academy es exclusivamente educativo y no
            constituye asesoría financiera. Opera siempre con gestión de riesgo y capital que puedas permitirte perder.
          </p>
          <p className="mt-4 text-center text-xs text-white/45">© {new Date().getFullYear()} LPU Academy. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Botón flotante WhatsApp (mobile) */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_rgba(0,200,83,0.55)] transition hover:bg-accent-dark active:scale-95 md:hidden"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
