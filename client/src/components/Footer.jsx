import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/avenora-logo.png"
              alt="AVENORA"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span>
              <span className="block font-serif text-[22px] tracking-[0.08em]">AVENORA</span>
              <span className="block text-[8.5px] font-semibold tracking-[0.18em] text-gold">
                CAREER &amp; EDU CONSULTANTS
              </span>
            </span>
          </Link>
          <p className="mt-4 font-script text-2xl text-gold">
            Your Career. Our Connections. Your Opportunity.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            AVENORA Career &amp; Edu Consultants — Guiding Careers. Building
            Futures.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-gold">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-gold">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-gold">Focus</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>MNC Placement Assistance</li>
            <li>Career Guidance</li>
            <li>Education &amp; Admission Support</li>
            <li>Interview &amp; Profile Preparation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-gold">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold" />
              Kerala &amp; across India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <a href="tel:+910000000000">+91 00000 00000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <a href="mailto:hello@avenora.in">hello@avenora.in</a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3 text-gold">
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AVENORA Career &amp; Edu Consultants. Founded by
        Kesna Xavier.
      </div>
    </footer>
  );
}
