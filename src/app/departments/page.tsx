import type { Metadata } from "next";
import { departments } from "@/data/content";

export const metadata: Metadata = {
  title: "Departments",
};

export default function DepartmentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-16 text-white md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(184,137,45,0.2),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Academics & life
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            Departments
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            From languages and mathematics to boarding, counselling and
            co-curricular champions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ul className="grid gap-10 md:grid-cols-2">
          {departments.map((dept) => (
            <li
              key={dept.slug}
              id={dept.slug}
              className="scroll-mt-28 border-t border-line pt-6"
            >
              <h2 className="font-display text-2xl font-semibold text-brand">
                {dept.name}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-accent">
                {dept.motto}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {dept.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
