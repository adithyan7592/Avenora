import { useState } from "react";

const initial = {
  name: "",
  email: "",
  phone: "",
  interest: "Placement Assistance",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setForm(initial);
      setStatus({
        type: "ok",
        text: "Thank you. Our team will get in touch with you shortly.",
      });
    } catch {
      setStatus({
        type: "err",
        text: "Could not send right now. Please try again or email hello@avenora.in.",
      });
    } finally {
      setSending(false);
    }
  }

  const field =
    "mt-1 w-full rounded-sm border border-teal/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold";

  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p className="gold-kicker">Get In Touch —</p>
        <h1 className="mt-2 font-serif text-4xl">Let’s start your journey</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
          Dedicated MNC Placement Assistance | Career Guidance | Education
          Support
        </p>
      </section>

      <section className="bg-[#f7f7f5] py-16">
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-xl space-y-4 rounded-md bg-white p-8 shadow-card"
        >
          <label className="block text-sm font-medium text-teal">
            Full name
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              className={field}
            />
          </label>
          <label className="block text-sm font-medium text-teal">
            Email
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className={field}
            />
          </label>
          <label className="block text-sm font-medium text-teal">
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className={field}
            />
          </label>
          <label className="block text-sm font-medium text-teal">
            I’m interested in
            <select
              name="interest"
              value={form.interest}
              onChange={onChange}
              className={field}
            >
              <option>Placement Assistance</option>
              <option>Career Guidance</option>
              <option>Education Support</option>
              <option>Admission Support</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-teal">
            Message
            <textarea
              required
              name="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className={field}
            />
          </label>
          <button type="submit" disabled={sending} className="btn-teal w-full justify-center">
            {sending ? "Sending…" : "Send enquiry"}
          </button>
          {status.text && (
            <p
              className={`text-center text-sm ${
                status.type === "ok" ? "text-teal" : "text-red-700"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
