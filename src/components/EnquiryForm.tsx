"use client";

import { useState, type FormEvent } from "react";
import { destinations, experiences, lodges } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

function generateReference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  return `TWC-${stamp}`;
}

const inputClass =
  "mt-2 w-full border border-forest/20 bg-ivory px-4 py-3 font-sans text-sm text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none";
const labelClass = "font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-moss";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [arrival, setArrival] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const arrivalDate = String(form.get("arrival") ?? "");
    const departureDate = String(form.get("departure") ?? "");

    if (!name || !email) {
      setError("Please fill in your name and email address.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (arrivalDate && departureDate && new Date(departureDate) <= new Date(arrivalDate)) {
      setError("Your departure date must be after your arrival date.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");

    // Demonstration only — no backend is wired up. In production this
    // would post to an API route backed by persistent storage and email.
    window.setTimeout(() => {
      setReference(generateReference());
      setStatus("success");
    }, 1100);
  }

  if (status === "success" && reference) {
    return (
      <div className="border border-forest/15 bg-ivory px-8 py-16 text-center">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-moss">
          Enquiry Received
        </p>
        <h3 className="mt-5 font-serif text-3xl font-semibold text-forest sm:text-4xl">
          Thank you &mdash; your journey begins here.
        </h3>
        <p className="mt-5 font-sans text-sm leading-relaxed text-moss">
          Your reference number is
        </p>
        <p className="mt-2 font-serif text-2xl tracking-wide text-forest">{reference}</p>
        <p className="mt-6 max-w-md mx-auto font-sans text-sm leading-relaxed text-moss">
          This is a sample enquiry form for demonstration purposes &mdash; no
          message has actually been sent. A travel designer would ordinarily
          be in touch within 48 hours to begin shaping your journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {error && (
        <p className="border border-red-400/50 bg-red-50 px-4 py-3 font-sans text-sm text-red-700">
          {error}
        </p>
      )}

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Full Name *</span>
          <input name="name" type="text" required className={inputClass} />
        </label>
        <label>
          <span className={labelClass}>Email Address *</span>
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label>
          <span className={labelClass}>Telephone</span>
          <input name="telephone" type="tel" className={inputClass} />
        </label>
        <label>
          <span className={labelClass}>Country of Residence</span>
          <input name="country" type="text" className={inputClass} />
        </label>
      </fieldset>

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Destination</span>
          <select name="destination" defaultValue="" className={inputClass}>
            <option value="">No preference</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className={labelClass}>Preferred Lodge</span>
          <select name="lodge" defaultValue="" className={inputClass}>
            <option value="">No preference</option>
            {lodges.map((l) => (
              <option key={l.slug} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Arrival Date</span>
          <input
            name="arrival"
            type="date"
            className={inputClass}
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </label>
        <label>
          <span className={labelClass}>Departure Date</span>
          <input name="departure" type="date" min={arrival || undefined} className={inputClass} />
        </label>
        <label>
          <span className={labelClass}>Adults</span>
          <input name="adults" type="number" min={1} defaultValue={2} className={inputClass} />
        </label>
        <label>
          <span className={labelClass}>Children</span>
          <input name="children" type="number" min={0} defaultValue={0} className={inputClass} />
        </label>
      </fieldset>

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Accommodation Preference</span>
          <select name="accommodation" defaultValue="" className={inputClass}>
            <option value="">No preference</option>
            <option value="suite">Private Suite</option>
            <option value="tented">Tented Suite</option>
            <option value="family">Family Accommodation</option>
            <option value="villa">Exclusive-Use Villa</option>
          </select>
        </label>
        <label>
          <span className={labelClass}>Estimated Budget (per person)</span>
          <select name="budget" defaultValue="" className={inputClass}>
            <option value="">Prefer not to say</option>
            <option value="under-1000">Under $1,000 / night</option>
            <option value="1000-2000">$1,000 &ndash; $2,000 / night</option>
            <option value="2000-plus">$2,000+ / night</option>
          </select>
        </label>
      </fieldset>

      <label className="block">
        <span className={labelClass}>Experiences of Interest</span>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {experiences.map((exp) => (
            <label key={exp.slug} className="flex items-center gap-2 font-sans text-sm text-forest">
              <input type="checkbox" name="experiences" value={exp.name} className="accent-forest" />
              {exp.name}
            </label>
          ))}
        </div>
      </label>

      <label className="block">
        <span className={labelClass}>Additional Requests</span>
        <textarea
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="Celebrations, dietary requirements, accessibility needs, or anything else we should know."
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-forest px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending Enquiry..." : "Submit Enquiry"}
      </button>
      <p className="font-sans text-xs text-moss/70">
        This submits an enquiry only &mdash; it does not create a confirmed
        booking.
      </p>
    </form>
  );
}
