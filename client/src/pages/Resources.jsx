import Reveal from "../components/Reveal.jsx";

const articles = [
  {
    title: "Preparing for MNC recruitment",
    text: "What recruiters look for, how to structure your CV, and how to practise interviews with confidence.",
  },
  {
    title: "Choosing the right course after Plus Two and Graduation",
    text: "A practical way to match Nursing, Paramedical, Engineering and Degree options with your goals.",
  },
  {
    title: "From counselling to career",
    text: "How AVENORA's end-to-end support works — guidance, admissions, placement and follow-up.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p
          className="gold-kicker animate-fade-up opacity-0"
          style={{ animationDelay: "0ms" }}
        >
          Insights —
        </p>
        <h1
          className="mt-2 animate-fade-up font-serif text-4xl opacity-0"
          style={{ animationDelay: "150ms" }}
        >
          Resources
        </h1>
        <p
          className="mx-auto mt-3 max-w-xl animate-fade-up text-sm text-white/75 opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          Short guides to help you take the next step with clarity.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-5 md:grid-cols-3">
          {articles.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="group relative overflow-hidden rounded-md bg-[#f7f7f5] p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <h2 className="font-serif text-xl text-teal transition-colors duration-300 group-hover:text-teal-mid">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-teal/70">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}