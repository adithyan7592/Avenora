import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";
import Reveal from "./Reveal.jsx";

export default function ServicesGrid({ services, showAll = false }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="gold-kicker">What We Do —</p>
          <h2 className="mt-2 font-serif text-4xl text-teal">Our Services</h2>
          <p className="mt-3 text-sm text-teal/70">
            Personalized support at every step of your education and career
            journey.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-teal">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}