import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  Briefcase,
  ContactRound,
  Mic,
  Monitor,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const icons = {
  users: Users,
  file: FileText,
  briefcase: Briefcase,
  "id-card": ContactRound,
  mic: Mic,
  monitor: Monitor,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Briefcase;
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [open, setOpen] = useState(false);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <article
      ref={cardRef}
      role="button"
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      aria-expanded={open}
      style={{ "--mx": `${pos.x}%`, "--my": `${pos.y}%` }}
      className="group relative cursor-pointer overflow-hidden rounded-md bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98]"
    >
      {/* cursor-tracking spotlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), rgba(197,160,89,0.16), transparent 70%)",
        }}
      />

      {/* diagonal shine sweep */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -inset-y-full left-[-60%] w-1/3 -rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[260%]" />
      </div>

      {/* top accent bar */}
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />

      <div className="relative">
        <div className="icon-pop mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-teal group-hover:text-gold">
          <Icon size={22} />
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold text-teal transition-colors duration-300 group-hover:text-teal-mid">
            {service.title}
          </h3>
          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-teal/70">
          {service.summary}
        </p>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <Link
              to="/contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-gold transition hover:text-gold-bright"
            >
              Enquire about this service <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}