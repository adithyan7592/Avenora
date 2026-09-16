import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <img
        src="/images/avenora-logo.png"
        alt="AVENORA"
        className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
      />
      <span className="min-w-0 leading-tight">
        <span className="block font-serif text-[18px] font-semibold tracking-[0.08em] text-teal sm:text-[22px]">
          AVENORA
        </span>
        {!compact && (
          <span className="block text-[7.5px] font-semibold tracking-[0.12em] text-gold sm:text-[8.5px] sm:tracking-[0.18em]">
            CAREER &amp; EDU CONSULTANTS
          </span>
        )}
      </span>
    </Link>
  );
}
