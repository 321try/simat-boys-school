import Image from "next/image";
import Link from "next/link";
import { departments, school } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden text-white">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
          alt="Students walking across a school campus"
          fill
          priority
          className="animate-drift object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/75 via-brand/70 to-brand-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,137,45,0.28),transparent_55%)]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-16 md:px-8 md:pb-20">
          <p className="animate-rise font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {school.name}
          </p>
          <h1 className="animate-rise-delay mt-5 max-w-2xl text-xl font-medium text-accent-soft md:text-2xl">
            {school.motto}
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {school.tagline}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center bg-accent px-5 py-3 text-sm font-semibold text-brand-deep transition hover:brightness-110"
            >
              Our story
            </Link>
            <Link
              href="/photos"
              className="inline-flex items-center border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              School photos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Our school
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-brand md:text-4xl">
          A boys boarding community growing from 31 learners to over a thousand.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Founded through AIC Simat station and raised by the community, Simat
          is now an extra-county boys boarding school — still sponsored by the
          African Inland Church, still chasing excellence.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 border-t border-line pt-8 text-sm text-muted">
          <p>
            <span className="block font-display text-3xl font-semibold text-brand">
              1968
            </span>
            Foundation stone laid
          </p>
          <p>
            <span className="block font-display text-3xl font-semibold text-brand">
              1008
            </span>
            Students in 2024
          </p>
          <p>
            <span className="block font-display text-3xl font-semibold text-brand">
              Extra county
            </span>
            Boys boarding
          </p>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Departments
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold md:text-4xl">
            Academics, boarding and talent under one roof.
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {departments.slice(0, 6).map((dept) => (
              <li key={dept.slug} className="border-t border-white/15 pt-5">
                <h3 className="font-display text-xl font-semibold">
                  {dept.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {dept.summary}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/departments"
            className="mt-10 inline-flex text-sm font-semibold text-accent-soft underline-offset-4 hover:underline"
          >
            View all departments
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          What&apos;s new
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-brand md:text-4xl">
          Have we told you what&apos;s going on recently?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Meet the leadership team, explore departments, and walk through
          snapshots of campus life — the same story as our Google Site, rebuilt
          for the web.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/staff"
            className="inline-flex bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            Meet staff
          </Link>
          <Link
            href="/departments"
            className="inline-flex border border-brand/25 px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
          >
            Browse departments
          </Link>
        </div>
      </section>
    </>
  );
}
