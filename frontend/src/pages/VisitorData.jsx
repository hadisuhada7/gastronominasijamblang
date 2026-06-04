import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import {
  Leaf,
  Download,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Trash2,
  Search,
} from "lucide-react";

const DATA_TEXT = {
  id: {
    overline: "Data Pengunjung",
    title: "Daftar Kunjungan",
    totalLabel: "pengunjung terdaftar",
    exportBtn: "Export ke Excel",
    deleteAllBtn: "Hapus Semua",
    searchPlaceholder: "Cari nama, domisili, atau email…",
    confirmDelete: "Hapus semua data pengunjung? Tindakan ini tidak dapat dibatalkan.",
    backHome: "Kembali ke Beranda",
    emptyNoData: "Belum ada data pengunjung",
    emptyNoDataDesc: "Data akan muncul setelah pengunjung mengisi formulir kunjungan",
    emptyNoResult: "Tidak ada hasil ditemukan",
    emptyNoResultDesc: "Coba kata kunci yang berbeda",
    openForm: "Buka Form Kunjungan",
    colNo: "No",
    colName: "Nama Lengkap",
    colCity: "Domisili",
    colEmail: "Email",
    colDate: "Tanggal Kunjungan",
    showing: "Menampilkan",
    to: "–",
    of: "dari",
    entries: "data",
    sheetName: "Data Pengunjung",
    excelColName: "Nama Lengkap",
    excelColCity: "Domisili",
    excelColDate: "Tanggal Kunjungan",
    locale: "id-ID",
  },
  en: {
    overline: "Visitor Data",
    title: "Visitor List",
    totalLabel: "visitors registered",
    exportBtn: "Export to Excel",
    deleteAllBtn: "Delete All",
    searchPlaceholder: "Search name, city, or email…",
    confirmDelete: "Delete all visitor data? This action cannot be undone.",
    backHome: "Back to Home",
    emptyNoData: "No visitor data yet",
    emptyNoDataDesc: "Data will appear after visitors fill in the registration form",
    emptyNoResult: "No results found",
    emptyNoResultDesc: "Try a different keyword",
    openForm: "Open Visitor Form",
    colNo: "No",
    colName: "Full Name",
    colCity: "City",
    colEmail: "Email",
    colDate: "Visit Date",
    showing: "Showing",
    to: "–",
    of: "of",
    entries: "entries",
    sheetName: "Visitor Data",
    excelColName: "Full Name",
    excelColCity: "City",
    excelColDate: "Visit Date",
    locale: "en-US",
  },
};

const STORAGE_KEY = "nasi_jamblang_visitors";
const PAGE_SIZE = 10;

function getVisitors() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function formatDate(iso, locale) {
  try {
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function VisitorData() {
  const [visitors, setVisitors] = useState(getVisitors);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("id");
  const t = DATA_TEXT[lang];

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return visitors;
    return visitors.filter(
      (v) =>
        v.namaLengkap.toLowerCase().includes(q) ||
        v.domisili.toLowerCase().includes(q) ||
        v.email.toLowerCase().includes(q)
    );
  }, [visitors, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageData = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleClearAll = () => {
    if (window.confirm(t.confirmDelete)) {
      localStorage.removeItem(STORAGE_KEY);
      setVisitors([]);
      setPage(1);
    }
  };

  const handleExport = () => {
    if (filtered.length === 0) return;

    const rows = filtered.map((v, i) => ({
      No: i + 1,
      [t.excelColName]: v.namaLengkap,
      [t.excelColCity]: v.domisili,
      Email: v.email,
      [t.excelColDate]: formatDate(v.tanggal, t.locale),
    }));

    const ws = XLSX.utils.json_to_sheet(rows);

    // Column widths
    ws["!cols"] = [
      { wch: 5 },
      { wch: 30 },
      { wch: 25 },
      { wch: 35 },
      { wch: 25 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, t.sheetName);

    const now = new Date();
    const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    XLSX.writeFile(wb, `data-pengunjung-nasi-jamblang-${stamp}.xlsx`);
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
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        {/* Page heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D19C4C]" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#8B3A23]">
              {t.overline}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl text-[#2A2421] leading-tight">
                {t.title}
              </h1>
              <p className="text-[#6E635A] mt-1 text-sm">
                Total{" "}
                <span className="font-semibold text-[#2C4C3B]">
                  {visitors.length}
                </span>{" "}
                {t.totalLabel}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleExport}
                disabled={filtered.length === 0}
                className="inline-flex items-center gap-2 bg-[#2C4C3B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#3a6050] active:scale-[0.97] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                {t.exportBtn}
              </button>

              {visitors.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-2 border border-red-200 text-red-500 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-red-50 active:scale-[0.97] transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  {t.deleteAllBtn}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B0A498]" strokeWidth={1.8} />
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder={t.searchPlaceholder}
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-[#E5D9C5] bg-white text-[#2A2421] placeholder:text-[#C5BAB0] text-sm outline-none focus:ring-2 focus:ring-[#2C4C3B]/20 focus:border-[#2C4C3B] transition-all"
          />
        </div>

        {/* Table */}
        <div className="bg-white border border-[#E5D9C5] rounded-2xl overflow-hidden shadow-sm">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center px-6">
              <Users className="w-12 h-12 text-[#D9CFC6] mb-4" strokeWidth={1.2} />
              <p className="font-serif text-xl text-[#2A2421] mb-1">
                {search ? t.emptyNoResult : t.emptyNoData}
              </p>
              <p className="text-[#B0A498] text-sm">
                {search ? t.emptyNoResultDesc : t.emptyNoDataDesc}
              </p>
              {!search && (
                <Link
                  to="/visitor-form"
                  className="mt-6 inline-flex items-center gap-2 bg-[#2C4C3B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#3a6050] transition-all"
                >
                  {t.openForm}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ) : (
            <>
              {/* Mobile card view */}
              <div className="block md:hidden divide-y divide-[#F2EBE1]">
                {pageData.map((v, idx) => {
                  const rowNum = (currentPage - 1) * PAGE_SIZE + idx + 1;
                  return (
                    <div key={v.id} className="px-5 py-4 hover:bg-[#FDFAF5] transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="font-semibold text-[#2A2421] text-base leading-snug">{v.namaLengkap}</span>
                        <span className="text-xs text-[#B0A498] font-medium shrink-0">#{rowNum}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                        <div>
                          <span className="text-[#B0A498] text-xs uppercase tracking-wider">{t.colCity}</span>
                          <p className="text-[#4A3F38] mt-0.5">{v.domisili}</p>
                        </div>
                        <div>
                          <span className="text-[#B0A498] text-xs uppercase tracking-wider">{t.colDate}</span>
                          <p className="text-[#6E635A] mt-0.5">{formatDate(v.tanggal, t.locale)}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[#B0A498] text-xs uppercase tracking-wider">{t.colEmail}</span>
                          <p className="text-[#4A3F38] mt-0.5 break-all">{v.email}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop table view */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F7F2EA] border-b border-[#E5D9C5]">
                      <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6E635A] w-12">
                        {t.colNo}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6E635A]">
                        {t.colName}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6E635A]">
                        {t.colCity}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6E635A]">
                        {t.colEmail}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6E635A] whitespace-nowrap">
                        {t.colDate}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageData.map((v, idx) => {
                      const rowNum = (currentPage - 1) * PAGE_SIZE + idx + 1;
                      return (
                        <tr
                          key={v.id}
                          className="border-b border-[#F2EBE1] hover:bg-[#FDFAF5] transition-colors"
                        >
                          <td className="px-5 py-4 text-[#B0A498] font-medium">
                            {rowNum}
                          </td>
                          <td className="px-5 py-4 font-semibold text-[#2A2421]">
                            {v.namaLengkap}
                          </td>
                          <td className="px-5 py-4 text-[#4A3F38]">
                            {v.domisili}
                          </td>
                          <td className="px-5 py-4 text-[#4A3F38] break-all">
                            {v.email}
                          </td>
                          <td className="px-5 py-4 text-[#6E635A] whitespace-nowrap">
                            {formatDate(v.tanggal, t.locale)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-5 py-4 border-t border-[#F2EBE1]">
                  <p className="text-xs text-[#B0A498]">
                    {t.showing}{" "}
                    <span className="text-[#2A2421] font-semibold">
                      {(currentPage - 1) * PAGE_SIZE + 1}
                    </span>{" "}
                    {t.to}{" "}
                    <span className="text-[#2A2421] font-semibold">
                      {Math.min(currentPage * PAGE_SIZE, filtered.length)}
                    </span>{" "}
                    {t.of}{" "}
                    <span className="text-[#2A2421] font-semibold">
                      {filtered.length}
                    </span>{" "}
                    {t.entries}
                  </p>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5D9C5] text-[#6E635A] hover:bg-[#F7F2EA] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(
                        (p) =>
                          p === 1 ||
                          p === totalPages ||
                          Math.abs(p - currentPage) <= 1
                      )
                      .reduce((acc, p, i, arr) => {
                        if (i > 0 && p - arr[i - 1] > 1) {
                          acc.push("ellipsis-" + p);
                        }
                        acc.push(p);
                        return acc;
                      }, [])
                      .map((p) =>
                        typeof p === "string" ? (
                          <span
                            key={p}
                            className="w-8 h-8 flex items-center justify-center text-[#B0A498] text-xs"
                          >
                            …
                          </span>
                        ) : (
                          <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                              p === currentPage
                                ? "bg-[#2C4C3B] text-white"
                                : "border border-[#E5D9C5] text-[#6E635A] hover:bg-[#F7F2EA]"
                            }`}
                          >
                            {p}
                          </button>
                        )
                      )}

                    <button
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5D9C5] text-[#6E635A] hover:bg-[#F7F2EA] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Bottom strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4C3B] via-[#D19C4C] to-[#8B3A23]" />
    </div>
  );
}
