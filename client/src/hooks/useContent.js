import { useEffect, useState } from "react";

const fallback = {
  site: {},
  services: [
    {
      slug: "career-guidance",
      title: "Career Guidance",
      icon: "users",
      summary:
        "Personalised counselling to help you choose the right career path based on your skills, interests and goals.",
    },
    {
      slug: "admission-support",
      title: "Admission Support",
      icon: "file",
      summary:
        "End-to-end help with applications, documentation and admissions for professional and degree programmes.",
    },
    {
      slug: "placement-assistance",
      title: "Placement Assistance",
      icon: "briefcase",
      summary:
        "Dedicated MNC and private-company placement support — our primary focus at AVENORA.",
    },
    {
      slug: "cv-profile-support",
      title: "CV & Profile Support",
      icon: "id-card",
      summary:
        "Professionally structured resumes and profiles that highlight your strengths for recruiters.",
    },
    {
      slug: "interview-preparation",
      title: "Interview Preparation",
      icon: "mic",
      summary:
        "Mock interviews, communication coaching and recruitment-process readiness.",
    },
    {
      slug: "online-sessions",
      title: "Online Sessions",
      icon: "monitor",
      summary:
        "Flexible virtual counselling, training and follow-up sessions from anywhere.",
    },
  ],
  courses: [
    {
      title: "B.Sc Nursing",
      icon: "stethoscope",
      blurb: "Admissions support for nursing programmes with trusted college networks.",
    },
    {
      title: "Paramedical",
      icon: "heartbeat",
      blurb: "Guidance for paramedical diplomas and degrees with strong clinical pathways.",
    },
    {
      title: "Engineering",
      icon: "gears",
      blurb: "Engineering admissions and later-stage placement mapping for technical careers.",
    },
    {
      title: "Degree Courses",
      icon: "graduation",
      blurb: "Degree programme counselling across arts, science, commerce and professional streams.",
    },
  ],
  stats: [
    { value: "1000+", label: "Students Guided Successfully", icon: "users" },
    { value: "200+", label: "Colleges & Institutions Network", icon: "building" },
    { value: "500+", label: "Placement Opportunities", icon: "briefcase" },
    { value: "100%", label: "Commitment to Your Success", icon: "award" },
  ],
};

export default function useContent() {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setData)
      .catch(() => {});
  }, []);

  return data;
}
