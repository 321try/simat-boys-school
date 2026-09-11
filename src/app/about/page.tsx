import type { Metadata } from "next";
import { history, principals, school } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const paragraphs = history.split("\n\n");

  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-16 text-white md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,137,45,0.25),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
            About us
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            School history
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            From AIM Simat station in 1968 to an extra-county boys boarding
            school of over a thousand learners — still {school.motto.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold text-brand md:text-3xl">
          Historical background of Simat High School
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted md:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-brand md:text-3xl">
            Simat High School principals over the years
          </h2>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principals.map((name, index) => (
              <li
                key={name}
                className="flex items-baseline gap-3 border-b border-line py-3 text-sm md:text-base"
              >
                <span className="font-display text-accent">{index + 1}.</span>
                <span className="font-medium text-foreground">{name}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
