import Link from "next/link";
import { navLinks, school } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-wide">
            {school.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {school.motto}. Sponsored by {school.sponsor}. Building boys into
            competent, responsible citizens.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 self-end md:justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-accent-soft"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50 md:px-8">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
