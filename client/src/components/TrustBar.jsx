import { MapPin, ShieldCheck, UserRound, Handshake } from "lucide-react";
import Reveal from "./Reveal.jsx";

const items = [
  {
    icon: MapPin,
    title: "Across Kerala & India",
    text: "Wide network and strong industry connections.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    text: "Honest guidance with complete transparency.",
  },
  {
    icon: UserRound,
    title: "Student First Approach",
    text: "Your goals, our priority always.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    text: "From counselling to career – we're with you.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f4f4f2] py-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 80} className="flex gap-3">
            <Icon className="mt-0.5 shrink-0 text-gold" size={28} strokeWidth={1.4} />
            <div>
              <h3 className="font-serif text-lg text-teal">{title}</h3>
              <p className="mt-1 text-sm text-teal/65">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
