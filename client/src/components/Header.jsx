import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/resources", label: "Resources" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-teal/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-teal" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            to="/contact"
            className="btn-teal hidden !px-5 !py-2.5 lg:inline-flex"
          >
            Get In Touch <ArrowRight size={15} />
          </Link>
          <button
            type="button"
            className="-mr-1 rounded p-2 text-teal lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-teal/10 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${pathname === link.to ? "text-gold" : "text-teal"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
