import type { Metadata } from "next";
import { leadership } from "@/data/content";

export const metadata: Metadata = {
  title: "Staff",
};

export default function StaffPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-16 text-white md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(184,137,45,0.22),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Leadership
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            Staff
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Messages from the principal, Board of Management, Parents Association
            and deputy principal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-14">
          {leadership.map((person) => (
            <article key={person.title} className="border-t border-line pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {person.title}
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-brand md:text-3xl">
                {person.name}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {person.message.split("\n\n").map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
