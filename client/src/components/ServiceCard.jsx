import {
  Users,
  FileText,
  Briefcase,
  ContactRound,
  Mic,
  Monitor,
} from "lucide-react";

const icons = {
  users: Users,
  file: FileText,
  briefcase: Briefcase,
  "id-card": ContactRound,
  mic: Mic,
  monitor: Monitor,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Briefcase;

  return (
    <article className="rounded-md bg-white p-7 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal">
        <Icon size={22} />
      </div>
      <h3 className="font-serif text-xl font-semibold text-teal">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-teal/70">{service.summary}</p>
    </article>
  );
}
