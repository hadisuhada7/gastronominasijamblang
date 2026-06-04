import { useState, useMemo, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Leaf, User, MapPin, Mail, ChevronRight, ArrowLeft } from "lucide-react";

const FORM_TEXT = {
  id: {
    overline: "Form Kunjungan",
    title: "Daftarkan Kunjungan Anda",
    subtitle:
      "Isi data berikut untuk mencatat kunjungan Anda ke Gastronomi Nasi Jamblang — warisan kuliner pesisir Cirebon.",
    labelName: "Nama Lengkap",
    placeholderName: "Masukkan nama lengkap Anda",
    labelCity: "Domisili",
    placeholderCity: "Kota / Kabupaten tempat tinggal",
    labelEmail: "Email",
    placeholderEmail: "contoh@email.com",
    submit: "Kirim & Jelajahi",
    submitting: "Menyimpan…",
    backHome: "Kembali ke Beranda",
    privacy: "Data Anda disimpan secara lokal dan tidak dibagikan kepada pihak lain.",
    errNameMin: "Nama lengkap minimal 2 karakter",
    errNameMax: "Nama lengkap maksimal 100 karakter",
    errCityMin: "Domisili minimal 2 karakter",
    errCityMax: "Domisili maksimal 100 karakter",
    errEmailInvalid: "Format email tidak valid",
    errEmailMax: "Email maksimal 150 karakter",
  },
  en: {
    overline: "Visitor Form",
    title: "Register Your Visit",
    subtitle:
      "Fill in the details below to record your visit to The Gastronomy of Nasi Jamblang — culinary heritage of coastal Cirebon.",
    labelName: "Full Name",
    placeholderName: "Enter your full name",
    labelCity: "City / Residence",
    placeholderCity: "City or regency of residence",
    labelEmail: "Email",
    placeholderEmail: "example@email.com",
    submit: "Submit & Explore",
    submitting: "Saving…",
    backHome: "Back to Home",
    privacy: "Your data is stored locally and not shared with any third party.",
    errNameMin: "Full name must be at least 2 characters",
    errNameMax: "Full name must be at most 100 characters",
    errCityMin: "City must be at least 2 characters",
    errCityMax: "City must be at most 100 characters",
    errEmailInvalid: "Invalid email format",
    errEmailMax: "Email must be at most 150 characters",
  },
};

const STORAGE_KEY = "nasi_jamblang_visitors";

function getVisitors() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveVisitor(data) {
  const visitors = getVisitors();
  const newVisitor = {
    id: Date.now().toString(),
    namaLengkap: data.namaLengkap.trim(),
    domisili: data.domisili.trim(),
    email: data.email.trim().toLowerCase(),
    tanggal: new Date().toISOString(),
  };
  visitors.unshift(newVisitor);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(visitors));
  return newVisitor;
}

export default function VisitorForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [lang, setLang] = useState("id");
  const t = FORM_TEXT[lang];

  const schema = useMemo(
    () =>
      z.object({
        namaLengkap: z.string().min(2, t.errNameMin).max(100, t.errNameMax),
        domisili: z.string().min(2, t.errCityMin).max(100, t.errCityMax),
        email: z.string().email(t.errEmailInvalid).max(150, t.errEmailMax),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  useEffect(() => {
    clearErrors();
  }, [lang, clearErrors]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    saveVisitor(data);
    await new Promise((r) => setTimeout(r, 600));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      {/* Header */}
      <header className="bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#E5D9C5] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <Leaf
              className="w-6 h-6 text-[#2C4C3B] transition-colors group-hover:text-[#D19C4C]"
              strokeWidth={1.6}
            />
            <span className="font-serif text-xl tracking-tight text-[#2A2421]">
              Nasi Jamblang
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center rounded-full border border-[#E5D9C5] p-0.5">
              {["id", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    lang === l
                      ? "bg-[#2C4C3B] text-white"
                      : "text-[#6E635A] hover:text-[#2C4C3B]"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#6E635A] hover:text-[#2C4C3B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backHome}
            </Link> */}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg">
          {/* Decorative overline */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D19C4C]" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#8B3A23]">
              {t.overline}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-[#2A2421] leading-tight mb-3">
            {t.title}
          </h1>
          <p className="text-[#6E635A] text-base leading-relaxed mb-10">
            {t.subtitle}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            {/* Full Name / Nama Lengkap */}
            <div>
              <label
                htmlFor="namaLengkap"
                className="flex items-center gap-2 text-sm font-semibold text-[#2A2421] mb-2"
              >
                <User className="w-4 h-4 text-[#2C4C3B]" strokeWidth={1.8} />
                {t.labelName}
                <span className="text-[#8B3A23]">*</span>
              </label>
              <input
                id="namaLengkap"
                type="text"
                autoComplete="name"
                placeholder={t.placeholderName}
                {...register("namaLengkap")}
                className={`w-full h-12 px-4 rounded-xl border bg-white text-[#2A2421] placeholder:text-[#C5BAB0] text-sm transition-all outline-none focus:ring-2 focus:ring-[#2C4C3B]/20 focus:border-[#2C4C3B] ${
                  errors.namaLengkap
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-[#E5D9C5]"
                }`}
              />
              {errors.namaLengkap && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                  {errors.namaLengkap.message}
                </p>
              )}
            </div>

            {/* City / Domisili */}
            <div>
              <label
                htmlFor="domisili"
                className="flex items-center gap-2 text-sm font-semibold text-[#2A2421] mb-2"
              >
                <MapPin className="w-4 h-4 text-[#2C4C3B]" strokeWidth={1.8} />
                {t.labelCity}
                <span className="text-[#8B3A23]">*</span>
              </label>
              <input
                id="domisili"
                type="text"
                autoComplete="address-level2"
                placeholder={t.placeholderCity}
                {...register("domisili")}
                className={`w-full h-12 px-4 rounded-xl border bg-white text-[#2A2421] placeholder:text-[#C5BAB0] text-sm transition-all outline-none focus:ring-2 focus:ring-[#2C4C3B]/20 focus:border-[#2C4C3B] ${
                  errors.domisili
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-[#E5D9C5]"
                }`}
              />
              {errors.domisili && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                  {errors.domisili.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-semibold text-[#2A2421] mb-2"
              >
                <Mail className="w-4 h-4 text-[#2C4C3B]" strokeWidth={1.8} />
                {t.labelEmail}
                <span className="text-[#8B3A23]">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={t.placeholderEmail}
                {...register("email")}
                className={`w-full h-12 px-4 rounded-xl border bg-white text-[#2A2421] placeholder:text-[#C5BAB0] text-sm transition-all outline-none focus:ring-2 focus:ring-[#2C4C3B]/20 focus:border-[#2C4C3B] ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                    : "border-[#E5D9C5]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 inline-flex items-center justify-center gap-2 bg-[#2C4C3B] text-white font-semibold rounded-xl hover:bg-[#3a6050] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.submitting}
                </>
              ) : (
                <>
                  {t.submit}
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-8 text-center text-xs text-[#B0A498]">
            {t.privacy}
          </p>
        </div>
      </main>

      {/* Decorative bottom strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4C3B] via-[#D19C4C] to-[#8B3A23]" />
    </div>
  );
}
