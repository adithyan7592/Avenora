const articles = [
  {
    title: "Preparing for MNC recruitment",
    text: "What recruiters look for, how to structure your CV, and how to practise interviews with confidence.",
  },
  {
    title: "Choosing the right course after Plus Two",
    text: "A practical way to match Nursing, Paramedical, Engineering and Degree options with your goals.",
  },
  {
    title: "From counselling to career",
    text: "How AVENORA’s end-to-end support works — guidance, admissions, placement and follow-up.",
  },
];

export default function Resources() {
  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p className="gold-kicker">Insights —</p>
        <h1 className="mt-2 font-serif text-4xl">Resources</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
          Short guides to help you take the next step with clarity.
        </p>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-5 md:grid-cols-3">
          {articles.map((item) => (
            <article key={item.title} className="rounded-md bg-[#f7f7f5] p-6">
              <h2 className="font-serif text-xl text-teal">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-teal/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
