import {
  Stethoscope,
  Activity,
  Cog,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import useContent from "../hooks/useContent.js";

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
        <p className="gold-kicker">Education Support —</p>
        <h1 className="mt-2 font-serif text-4xl">Courses We Support</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
          Admission support for B.Sc. Nursing, Paramedical, Engineering, Degree
          and other professional programmes.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-5 sm:grid-cols-2">
          {courses.map((course) => {
            const Icon = icons[course.icon] || GraduationCap;
            return (
              <article
                key={course.title}
                className="flex gap-4 rounded-md border border-teal/10 p-6 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-gold">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="font-serif text-2xl text-teal">{course.title}</h2>
                  <p className="mt-2 text-sm text-teal/70">{course.blurb}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-teal">
            Talk to a counsellor
          </Link>
        </div>
      </section>
    </>
  );
}
