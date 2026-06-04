import { useState, useEffect } from "react";
import { Menu, X, Leaf, Flame, Heart, Users, ChevronRight, Sparkles, Soup } from "lucide-react";
import { CONTENT, IMAGES } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const NAV_KEYS = [
  "philosophy",
  "ingredients",
  "techniques",
  "tasting",
  "serving",
  "experience",
  "nutrition",
  "ethics",
];

const Overline = ({ children }) => (
  <span className="overline-accent" data-testid="section-overline">
    {children}
  </span>
);

/* ---------------- Navbar ---------------- */
const Navbar = ({ lang, setLang, t }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FDFBF7]/85 backdrop-blur-xl border-b border-[#E5D9C5]/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <Leaf className={`w-6 h-6 ${scrolled ? "text-[#2C4C3B]" : "text-[#D19C4C]"} transition-colors`} strokeWidth={1.6} />
          <span className={`font-serif text-xl tracking-tight ${scrolled ? "text-[#2A2421]" : "text-white"} transition-colors`}>
            Nasi Jamblang
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_KEYS.map((k) => (
            <button
              key={k}
              data-testid={`nav-link-${k}`}
              onClick={() => go(k)}
              className={`text-sm tracking-wide transition-colors hover:text-[#D19C4C] ${
                scrolled ? "text-[#6E635A]" : "text-white/85"
              }`}
            >
              {t.nav[k]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            data-testid="language-toggle"
            className={`flex items-center rounded-full border p-0.5 ${
              scrolled ? "border-[#E5D9C5]" : "border-white/30"
            }`}
          >
            {["id", "en"].map((l) => (
              <button
                key={l}
                data-testid={`lang-${l}`}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === l
                    ? "bg-[#2C4C3B] text-white"
                    : scrolled
                    ? "text-[#6E635A]"
                    : "text-white/80"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden ${scrolled ? "text-[#2A2421]" : "text-white"}`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-[#FDFBF7] border-t border-[#E5D9C5] px-6 py-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {NAV_KEYS.map((k) => (
              <button
                key={k}
                data-testid={`mobile-nav-link-${k}`}
                onClick={() => go(k)}
                className="text-left py-2.5 text-[#2A2421] border-b border-[#E5D9C5]/60"
              >
                {t.nav[k]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------------- Hero ---------------- */
const Hero = ({ t }) => (
  <section id="hero" data-testid="hero-section" className="relative min-h-[100vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.hero} alt="Nasi Jamblang" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A140F] via-[#1A140F]/55 to-[#1A140F]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[#E6C58A] uppercase tracking-[0.25em] text-xs font-semibold">
          <span className="w-8 h-px bg-[#D19C4C]" />
          {t.hero.overline}
        </span>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mt-6 max-w-4xl">
          {t.hero.title}
        </h1>
      </Reveal>
      <Reveal delay={0.24}>
        <p className="text-white/85 text-base md:text-lg leading-relaxed mt-7 max-w-xl">
          {t.hero.subtitle}
        </p>
      </Reveal>
      <Reveal delay={0.36}>
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <button
            data-testid="hero-cta-primary"
            onClick={() => document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 bg-[#D19C4C] text-[#2A2421] font-semibold px-7 py-3.5 rounded-full hover:bg-[#e0ad5f] transition-all"
          >
            {t.hero.ctaPrimary}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            data-testid="hero-cta-secondary"
            onClick={() => document.getElementById("ingredients")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------------- Philosophy ---------------- */
const PHILO_ICONS = [Leaf, Users, Sparkles, Heart];
const Philosophy = ({ t }) => (
  <section id="philosophy" data-testid="philosophy-section" className="py-24 md:py-32 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl">
        <Reveal><Overline>{t.philosophy.overline}</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2A2421] tracking-tight mt-4">
            {t.philosophy.title}
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[#6E635A] text-base md:text-lg leading-relaxed mt-5">{t.philosophy.lead}</p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-14">
        {t.philosophy.cards.map((c, i) => {
          const Icon = PHILO_ICONS[i];
          const big = i === 0 || i === 3;
          return (
            <Reveal key={c.tag} delay={i * 0.08} className={big ? "md:col-span-1" : "md:col-span-1"}>
              <article
                data-testid={`philosophy-card-${i}`}
                className="group h-full bg-[#F2EBE1] border border-[#E5D9C5] rounded-2xl p-8 hover:border-[#2C4C3B] transition-colors duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2C4C3B]/10 flex items-center justify-center mb-6 group-hover:bg-[#2C4C3B] transition-colors">
                  <Icon className="w-6 h-6 text-[#2C4C3B] group-hover:text-[#F2EBE1] transition-colors" strokeWidth={1.6} />
                </div>
                <span className="overline-accent">{c.tag}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#2A2421] mt-2 mb-3">{c.title}</h3>
                <p className="text-[#6E635A] leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------------- Ingredients ---------------- */
const Ingredients = ({ t }) => (
  <section id="ingredients" data-testid="ingredients-section" className="py-24 md:py-32 bg-[#F2EBE1]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl">
        <Reveal><Overline>{t.ingredients.overline}</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2A2421] tracking-tight mt-4">{t.ingredients.title}</h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[#6E635A] text-base md:text-lg leading-relaxed mt-5">{t.ingredients.lead}</p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {t.ingredients.items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.08}>
            <article data-testid={`ingredient-card-${i}`} className="group bg-[#FDFBF7] border border-[#E5D9C5] rounded-2xl overflow-hidden h-full hover:border-[#8B3A23] transition-colors duration-400">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="overline-accent">{it.role}</span>
                <h3 className="font-serif text-2xl text-[#2A2421] mt-1.5 mb-2.5">{it.name}</h3>
                <p className="text-sm text-[#6E635A] leading-relaxed">{it.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div data-testid="ingredient-variety" className="mt-14 bg-[#2C4C3B] rounded-3xl p-10 md:p-14 text-[#F2EBE1]">
          <div className="flex items-center gap-2 text-[#E6C58A] uppercase tracking-[0.2em] text-xs font-semibold">
            <Soup className="w-4 h-4" /> {t.ingredients.varietyTitle}
          </div>
          <p className="text-[#EFE7D9] leading-relaxed mt-4 max-w-3xl text-base md:text-lg">{t.ingredients.varietyBody}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {t.ingredients.varietyList.map((v) => (
              <span key={v} className="px-4 py-2 rounded-full border border-[#F2EBE1]/25 text-sm text-[#F2EBE1] hover:bg-[#F2EBE1]/10 transition-colors">
                {v}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------------- Techniques (sticky split) ---------------- */
const Techniques = ({ t }) => (
  <section id="techniques" data-testid="techniques-section" className="py-24 md:py-32 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal><Overline>{t.techniques.overline}</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A2421] tracking-tight mt-4">{t.techniques.title}</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[#6E635A] text-base md:text-lg leading-relaxed mt-5">{t.techniques.lead}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5D9C5]">
              <img src={IMAGES.woodStove} alt="Traditional stove" className="w-full h-72 object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          {t.techniques.tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.08}>
              <article data-testid={`technique-card-${i}`} className="group flex gap-5 bg-[#F2EBE1] border border-[#E5D9C5] rounded-2xl p-5 hover:border-[#2C4C3B] transition-colors">
                <div className="shrink-0 w-28 h-28 rounded-xl overflow-hidden">
                  <img src={tool.img} alt={tool.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#8B3A23] mb-1.5">
                    <Flame className="w-4 h-4" />
                    <h3 className="font-serif text-2xl text-[#2A2421]">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-[#6E635A] leading-relaxed">{tool.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Tasting (dark terracotta) ---------------- */
const Tasting = ({ t }) => (
  <section id="tasting" data-testid="tasting-section" className="py-24 md:py-32 bg-[#3A1E14] text-[#F2EBE1] relative overflow-hidden">
    <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#8B3A23]/30 blur-3xl" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[#E6C58A] uppercase tracking-[0.2em] text-xs font-semibold">
              <span className="w-8 h-px bg-[#D19C4C]" /> {t.tasting.overline}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-4">{t.tasting.title}</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[#EADFCF]/85 leading-relaxed mt-5 text-base md:text-lg">{t.tasting.lead}</p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {t.tasting.notes.map((n, i) => (
              <Reveal key={n.label} delay={0.24 + i * 0.08}>
                <div data-testid={`tasting-note-${i}`} className="flex items-start gap-4 border-l-2 border-[#D19C4C] pl-5">
                  <div>
                    <h4 className="font-serif text-xl text-[#F2EBE1]">{n.label}</h4>
                    <p className="text-sm text-[#EADFCF]/70 mt-1">{n.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-[#F2EBE1]/15">
              <img src={IMAGES.display} alt="Tasting Nasi Jamblang" className="w-full h-[440px] object-cover" />
            </div>
            <div data-testid="tasting-aroma" className="absolute -bottom-6 -left-4 right-8 bg-[#2C4C3B] rounded-2xl p-6 shadow-xl border border-[#F2EBE1]/10">
              <h4 className="font-serif text-xl text-[#E6C58A]">{t.tasting.aromaTitle}</h4>
              <p className="text-sm text-[#EFE7D9]/85 leading-relaxed mt-2">{t.tasting.aromaBody}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------- Serving ---------------- */
const Serving = ({ t }) => (
  <section id="serving" data-testid="serving-section" className="py-24 md:py-32 bg-[#FDFBF7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-3xl">
        <Reveal><Overline>{t.serving.overline}</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2A2421] tracking-tight mt-4">{t.serving.title}</h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[#6E635A] text-base md:text-lg leading-relaxed mt-5">{t.serving.lead}</p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {t.serving.cards.map((c, i) => (
          <Reveal key={c.tag} delay={i * 0.1}>
            <article data-testid={`serving-card-${i}`} className="relative overflow-hidden rounded-3xl border border-[#E5D9C5] group">
              <img src={i === 0 ? IMAGES.riceLeaf : IMAGES.display} alt={c.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-8">
                <span className="overline-accent">{c.tag}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#2A2421] mt-2 mb-3">{c.title}</h3>
                <p className="text-[#6E635A] leading-relaxed">{c.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Experience ---------------- */
const Experience = ({ t }) => (
  <section id="experience" data-testid="experience-section" className="relative py-28 md:py-40 overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.display} alt="Etalase" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#1A140F]/75" />
    </div>
    <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-[#F2EBE1]">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[#E6C58A] uppercase tracking-[0.2em] text-xs font-semibold">
          <span className="w-8 h-px bg-[#D19C4C]" /> {t.experience.overline} <span className="w-8 h-px bg-[#D19C4C]" />
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight mt-5">{t.experience.title}</h2>
      </Reveal>
      <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
        {t.experience.points.map((p, i) => (
          <Reveal key={i} delay={0.2 + i * 0.1}>
            <p data-testid={`experience-point-${i}`} className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-7 text-[#EFE7D9]/90 leading-relaxed">
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Nutrition ---------------- */
const Nutrition = ({ t }) => (
  <section id="nutrition" data-testid="nutrition-section" className="py-24 md:py-32 bg-[#F2EBE1]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <Reveal><Overline>{t.nutrition.overline}</Overline></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A2421] tracking-tight mt-4">{t.nutrition.title}</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[#6E635A] text-base md:text-lg leading-relaxed mt-5">{t.nutrition.lead}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div data-testid="nutrition-table" className="mt-8 bg-[#FDFBF7] border border-[#E5D9C5] rounded-2xl p-7">
              <h3 className="text-xs uppercase tracking-[0.18em] text-[#8B3A23] font-semibold">{t.nutrition.tableTitle}</h3>
              <table className="w-full mt-5">
                <tbody>
                  {t.nutrition.table.map((row, i) => (
                    <tr key={row.k} data-testid={`nutrition-row-${i}`} className="border-b border-[#E5D9C5] last:border-0">
                      <td className="py-4 text-[#2A2421] font-medium">{row.k}</td>
                      <td className="py-4 text-right font-serif text-xl text-[#2C4C3B]">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <div className="space-y-5 lg:pt-16">
          {t.nutrition.sources.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article data-testid={`nutrition-source-${i}`} className="bg-[#FDFBF7] border border-[#E5D9C5] rounded-2xl p-7 hover:border-[#2C4C3B] transition-colors">
                <span className="overline-accent">{s.title}</span>
                <h3 className="font-serif text-2xl text-[#2A2421] mt-1.5 mb-2">{s.item}</h3>
                <p className="text-sm text-[#6E635A] leading-relaxed">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Ethics ---------------- */
const Ethics = ({ t }) => (
  <section id="ethics" data-testid="ethics-section" className="py-24 md:py-32 bg-[#2C4C3B] text-[#F2EBE1] relative overflow-hidden">
    <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-10">
      <Leaf className="w-40 h-40" strokeWidth={0.5} />
    </div>
    <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[#E6C58A] uppercase tracking-[0.2em] text-xs font-semibold">
          {t.ethics.overline}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-5">{t.ethics.title}</h2>
      </Reveal>
      <Reveal delay={0.18}>
        <blockquote className="font-serif text-2xl md:text-4xl text-[#E6C58A] italic leading-snug mt-10 max-w-3xl mx-auto">
          “{t.ethics.quote}”
        </blockquote>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-5 text-left">
        {t.ethics.points.map((p, i) => (
          <Reveal key={i} delay={0.24 + i * 0.1}>
            <p data-testid={`ethics-point-${i}`} className="bg-[#234032] border border-[#F2EBE1]/12 rounded-2xl p-7 text-[#EFE7D9]/85 text-sm leading-relaxed">
              <span className="font-serif text-3xl text-[#D19C4C] block mb-2">0{i + 1}</span>
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const Footer = ({ t }) => (
  <footer data-testid="footer" className="bg-[#1A140F] text-[#EFE7D9] py-14">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="flex items-center gap-3">
        <Leaf className="w-7 h-7 text-[#D19C4C]" strokeWidth={1.5} />
        <div>
          <p className="font-serif text-xl">{t.footer.brand}</p>
          <p className="text-sm text-[#EFE7D9]/55 mt-0.5">{t.footer.tagline}</p>
        </div>
      </div>
      <p className="text-xs text-[#EFE7D9]/50">{t.footer.rights}</p>
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
export default function Landing() {
  const [lang, setLang] = useState("id");
  const t = CONTENT[lang];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Philosophy t={t} />
        <Ingredients t={t} />
        <Techniques t={t} />
        <Tasting t={t} />
        <Serving t={t} />
        <Experience t={t} />
        <Nutrition t={t} />
        <Ethics t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
