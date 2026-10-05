import {
  Stethoscope,
  Activity,
  Cog,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import useContent from "../hooks/useContent.js";
import Reveal from "../components/Reveal.jsx";

const icons = {
  stethoscope: Stethoscope,
  heartbeat: Activity,
  gears: Cog,
  graduation: GraduationCap,
};

export default function Courses() {
  const { courses } = useContent();

  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p
          className="gold-kicker animate-fade-up opacity-0"
          style={{ animationDelay: "0ms" }}
        >
          Education Support —
        </p>
        <h1
          className="mt-2 animate-fade-up font-serif text-4xl opacity-0"
          style={{ animationDelay: "150ms" }}
        >
          Courses We Support
        </h1>
        <p
          className="mx-auto mt-3 max-w-xl animate-fade-up text-sm text-white/75 opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          Admission support for B.Sc. Nursing, Paramedical, Engineering, Degree
          and other professional programmes.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-5 sm:grid-cols-2">
          {courses.map((course, index) => {
            const Icon = icons[course.icon] || GraduationCap;
            return (
              <Reveal key={course.title} delay={index * 100}>
                <article className="group flex gap-4 rounded-md border border-teal/10 p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-xl">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:bg-gold group-hover:text-teal">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl text-teal transition-colors duration-300 group-hover:text-teal-mid">
                      {course.title}
                    </h2>
                    <p className="mt-2 text-sm text-teal/70">{course.blurb}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={courses.length * 100} className="mt-10 text-center">
          <Link to="/contact" className="btn-teal">
            Talk to a counsellor
          </Link>
        </Reveal>
      </section>
    </>
  );
}