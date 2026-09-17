import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  BookOpen,
  FileCheck,
  Briefcase,
  TrendingUp,
  Stethoscope,
  Activity,
  Cog,
  GraduationCap,
} from "lucide-react";

const pills = [
  { icon: BookOpen, label: "Education Guidance" },
  { icon: FileCheck, label: "Admission Support" },
  { icon: Briefcase, label: "Placement Assistance" },
  { icon: TrendingUp, label: "Career Development" },
];

const courses = [
  { icon: Stethoscope, label: "B.Sc Nursing" },
  { icon: Activity, label: "Paramedical" },
  { icon: Cog, label: "Engineering" },
  { icon: GraduationCap, label: "Degree Courses" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal text-white">
      <div className="relative min-h-[560px] lg:min-h-[680px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <img
            src="/images/hero.jpg"
            alt="A student looking toward career opportunity — AVENORA"
            className="h-full w-full object-cover object-[18%_center] lg:object-[28%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal/90 via-teal/75 to-teal/80 lg:bg-gradient-to-r lg:from-teal/90 lg:via-teal/20 lg:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-12">
          <div className="max-w-xl pb-8 sm:pb-28 lg:pb-20">
            <p
              className="gold-kicker animate-fade-up opacity-0"
              style={{ animationDelay: "0ms" }}
            >
              Guiding Careers. Building Futures. —
            </p>
            <p
              className="mt-3 animate-fade-up font-script text-[28px] leading-[1.2] text-gold opacity-0 sm:text-[34px]"
              style={{ animationDelay: "150ms" }}
            >
              Your Career. Our Connections. Your Opportunity.
            </p>
            <h1
              className="mt-4 animate-fade-up font-serif text-[32px] font-medium leading-[1.18] opacity-0 sm:text-[48px] lg:text-[54px]"
              style={{ animationDelay: "300ms" }}
            >
              The Right Guidance Today, A Better Tomorrow.
            </h1>
            <p
              className="mt-4 animate-fade-up text-[13px] font-medium leading-relaxed text-gold opacity-0 sm:mt-5 sm:text-[14px]"
              style={{ animationDelay: "450ms" }}
            >
              Dedicated MNC Placement Assistance | Career Guidance | Education
              Support
            </p>
            <p
              className="mt-3 animate-fade-up text-sm leading-relaxed text-white/75 opacity-0"
              style={{ animationDelay: "600ms" }}
            >
              Expert guidance for your education, career and placement. Admissions,
              training and career support – all under one roof.
            </p>
            <div
              className="mt-6 animate-fade-up flex flex-col gap-3 opacity-0 sm:mt-8 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "750ms" }}
            >
              <Link to="/services" className="btn-gold w-full sm:w-auto">
                Explore Services <ArrowRight size={15} />
              </Link>
              <Link to="/about" className="btn-outline-light w-full sm:w-auto">
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[420px] lg:block">
            <div className="absolute right-0 top-8 z-20 flex w-[176px] flex-col gap-3">
              {pills.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-md bg-white/95 px-3 py-2.5 opacity-0 shadow-lg animate-fade-up"
                  style={{ animationDelay: `${900 + index * 120}ms` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-gold">
                    <Icon size={14} />
                  </span>
                  <span className="text-[11px] font-semibold leading-tight text-teal">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 px-4 pb-6 sm:px-5 sm:pb-8 lg:px-8">
          <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-2 rounded-sm bg-teal-deep/85 px-3 py-3 backdrop-blur-md sm:grid-cols-4 sm:gap-3 sm:px-4 sm:py-4 lg:px-8">
            {courses.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/courses"
                className="flex items-center justify-center gap-2 py-1 text-center"
              >
                <Icon size={18} className="text-gold" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}