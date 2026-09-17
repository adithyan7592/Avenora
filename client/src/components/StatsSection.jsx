import { Users, Building2, Briefcase, Award } from "lucide-react";
import useInView from "../hooks/useInView.js";
import useCountUp from "../hooks/useCountUp.js";

const icons = {
  users: Users,
  building: Building2,
  briefcase: Briefcase,
  award: Award,
};

function StatItem({ item, index, start }) {
  const Icon = icons[item.icon] || Award;
  const display = useCountUp(item.value, { start, duration: 1400 + index * 150 });

  return (
    <div>
      <Icon className="mb-3 text-gold" size={28} />
      <p className="font-serif text-4xl text-gold">{display}</p>
      <p className="mt-1 text-sm text-white/80">{item.label}</p>
    </div>
  );
}

export default function StatsSection({ stats }) {
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section className="bg-teal py-20 text-white">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"
      >
        <div>
          <p className="gold-kicker">Why Choose AVENORA? —</p>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl">
            We Guide. You Achieve.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            Founded by Kesna Xavier, AVENORA bridges talent and opportunity
            through personalised career guidance, professional MNC placement
            assistance and reliable education support. We stand with you from
            counselling to career.
          </p>
          <p className="mt-8 font-script text-3xl text-gold">
            Your Career. Our Connections. Your Opportunity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((item, index) => (
            <StatItem key={item.label} item={item} index={index} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
