import ServicesGrid from "../components/ServicesGrid.jsx";
import useContent from "../hooks/useContent.js";

export default function Services() {
  const { services } = useContent();

  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p className="gold-kicker">What We Do —</p>
        <h1 className="mt-2 font-serif text-4xl">Our Services</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
          Dedicated MNC Placement Assistance | Career Guidance | Education
          Support
        </p>
      </section>
      <ServicesGrid services={services} showAll />
    </>
  );
}
