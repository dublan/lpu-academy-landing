import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LINKS } from "../config";
import { WhatsAppIcon } from "../icons";

const SLIDES = [
  {
    badge: "Transparencia",
    accent: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
    dot: "bg-cyan-300",
    title: "Aprendizaje Financiero 100% Gratuito",
    desc: "Formación en trading sin cuotas ocultas, sin depósitos obligatorios ni cobros sorpresa. Acceso libre al conocimiento y a nuestra futura formación avanzada.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    alt: "Gráficos financieros y laptop con plataforma de trading",
  },
  {
    badge: "Seguridad",
    accent: "text-blue-300 border-blue-400/30 bg-blue-400/10",
    dot: "bg-blue-400",
    title: "Comunidad Protegida y Cero Spam",
    desc: "Un entorno limpio enfocado en el aprendizaje. Queda prohibida la venta de cursos, señales VIP y bots. Ningún administrador te solicitará dinero o claves en privado.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    alt: "Concepto de seguridad digital con candado y red protegida",
  },
  {
    badge: "Audiencia",
    accent: "text-violet-300 border-violet-400/30 bg-violet-400/10",
    dot: "bg-violet-300",
    title: "Diseñado para Todos los Niveles",
    desc: "Ideal tanto para principiantes desde cero como para traders con experiencia. Aprende análisis técnico, fundamental, gestión de riesgo y psicología de mercado.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Panel de análisis de datos con gráficos y métricas",
  },
  {
    badge: "Filosofía",
    accent: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
    dot: "bg-cyan-300",
    title: "Colaboración y Crecimiento Mutuo",
    desc: "Nuestro único objetivo es ayudar. Crece junto a traders que comparten tu camino y contribuye respondiendo dudas para fortalecer a la comunidad.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    alt: "Equipo colaborando en un entorno tecnológico",
  },
];

export default function NosotrosCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, i));
    const child = track.children[clamped];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setIndex(clamped);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackLeft = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const center = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
          const dist = Math.abs(center - trackLeft);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setIndex(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="nosotros" className="scroll-mt-20 bg-navy py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          Nosotros
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-extrabold text-white sm:text-4xl">
          Una comunidad creada para aprender y crecer
        </h2>

        <div className="relative mt-8">
          <div
            ref={trackRef}
            aria-roledescription="carousel"
            aria-label="Conoce LPU Academy"
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SLIDES.map((s, i) => (
              <article
                key={s.title}
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${SLIDES.length}: ${s.title}`}
                className="flex w-full shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur min-h-[500px] sm:min-h-[440px] sm:w-[46%] lg:min-h-[560px] lg:flex-row lg:w-full"
              >
                <div className="relative h-60 w-full shrink-0 overflow-hidden sm:h-56 lg:h-auto lg:min-h-[560px] lg:w-1/2">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy/40" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-8 lg:p-12">
                  <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider sm:px-4 sm:py-1.5 sm:text-xs ${s.accent}`}>
                    {s.badge}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-white sm:mt-4 sm:text-3xl lg:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-slate-300 sm:mt-3 sm:text-base">{s.desc}</p>
                  <p className="mt-4 text-xs font-bold tracking-widest text-slate-500 sm:mt-5">
                    {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Slide anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-300 disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Elegir slide">
              {SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir al slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? `w-7 ${s.dot}` : "w-2.5 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(index + 1)}
              disabled={index === SLIDES.length - 1}
              aria-label="Slide siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-300 disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unirme al WhatsApp de LPU Academy"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-[0_12px_30px_-8px_rgba(0,200,83,0.7)] transition hover:bg-accent-dark active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-6 w-6 shrink-0" />
            Entrar gratis a la comunidad
          </a>
          <p className="mt-3 text-sm text-slate-400">
            ¿Dudas?{" "}
            <a href="mailto:lpubenitez@gmail.com" className="font-semibold text-cyan-300 hover:underline">
              lpubenitez@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
