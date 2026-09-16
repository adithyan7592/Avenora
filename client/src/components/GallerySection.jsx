import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { galleryItems } from "../data/gallery.js";

const filters = [
  { id: "all", label: "All" },
  { id: "ceremony", label: "Ceremony" },
  { id: "details", label: "Details" },
];

function spanClass(span, compact) {
  if (compact) return "col-span-1 min-h-[220px] sm:min-h-[260px]";
  if (span === "wide") return "md:col-span-2 min-h-[240px] md:min-h-[280px]";
  if (span === "tall") return "min-h-[320px] md:min-h-[380px] md:row-span-2";
  return "min-h-[240px] md:min-h-[280px]";
}

export default function GallerySection({
  compact = false,
  showFilters = false,
  heading = true,
}) {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    const list =
      filter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter);
    return compact ? list.slice(0, 6) : list;
  }, [filter, compact]);

  const featured = items[0];
  const rest = items.slice(1);
  const [spot, setSpot] = useState(0);

  useEffect(() => {
    setSpot(0);
  }, [filter, compact]);

  useEffect(() => {
    if (active == null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setActive((i) => (i + 1) % items.length);
      }
      if (e.key === "ArrowLeft") {
        setActive((i) => (i - 1 + items.length) % items.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, items.length]);

  const current = active != null ? items[active] : null;
  const spotlight = items[spot] || featured;

  return (
    <section className="bg-[#f7f6f3] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="gold-kicker">Moments —</p>
            <h2 className="mt-2 font-serif text-4xl text-teal">Our Gallery</h2>
            <p className="mt-3 text-sm text-teal/70">
              From the AVENORA inauguration — tradition, light and a new beginning.
            </p>
          </div>
        )}

        {showFilters && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition ${
                  filter === item.id
                    ? "bg-teal text-white"
                    : "bg-white text-teal/70 ring-1 ring-teal/10 hover:text-teal"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {!compact && spotlight && (
          <div className="mt-10 overflow-hidden rounded-sm bg-teal shadow-card">
            <button
              type="button"
              onClick={() => setActive(spot)}
              className="group relative block w-full"
            >
              <img
                src={spotlight.src}
                alt={spotlight.alt}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[380px] lg:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal via-teal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-8">
                <div className="text-left">
                  <p className="font-script text-2xl text-gold sm:text-3xl">
                    {spotlight.title}
                  </p>
                  <p className="mt-1 max-w-lg text-sm text-white/80">
                    {spotlight.caption}
                  </p>
                </div>
                <span className="hidden items-center gap-1 text-xs font-semibold tracking-wide text-gold sm:inline-flex">
                  View <Maximize2 size={14} />
                </span>
              </div>
            </button>
            <div className="flex gap-2 overflow-x-auto bg-teal-deep p-3">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSpot(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-sm ring-2 transition sm:h-20 sm:w-28 ${
                    spot === index
                      ? "ring-gold"
                      : "ring-transparent opacity-70 hover:opacity-100"
                  }`}
                  aria-label={item.title}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className={`grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ${
            compact ? "mt-10" : "mt-6"
          }`}
        >
          {(compact ? items : rest).map((item, index) => {
            const openIndex = compact ? index : index + 1;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(openIndex)}
                className={`group relative overflow-hidden rounded-sm bg-white text-left shadow-card ${spanClass(
                  item.span,
                  compact
                )}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-lg text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/80">{item.caption}</p>
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-teal opacity-0 transition group-hover:opacity-100">
                  <Maximize2 size={14} />
                </span>
              </button>
            );
          })}
        </div>

        {compact && (
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-teal">
              View full gallery <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-teal/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-8">
            <p className="text-sm text-gold">
              {active + 1} / {items.length}
            </p>
            <button
              type="button"
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label="Close gallery"
              onClick={() => setActive(null)}
            >
              <X />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-12 pb-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous photo"
              onClick={() =>
                setActive((i) => (i - 1 + items.length) % items.length)
              }
            >
              <ChevronLeft />
            </button>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[70vh] max-w-full rounded-sm object-contain shadow-2xl ring-1 ring-gold/30"
            />
            <button
              type="button"
              className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
              aria-label="Next photo"
              onClick={() => setActive((i) => (i + 1) % items.length)}
            >
              <ChevronRight />
            </button>
          </div>

          <div
            className="px-5 pb-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-2xl text-white">{current.title}</p>
            <p className="mx-auto mt-1 max-w-xl text-sm text-white/70">
              {current.caption}
            </p>
            <div className="mx-auto mt-4 flex max-w-3xl justify-center gap-2 overflow-x-auto pb-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-sm ring-2 ${
                    index === active ? "ring-gold" : "ring-transparent opacity-60"
                  }`}
                >
                  <img src={item.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
