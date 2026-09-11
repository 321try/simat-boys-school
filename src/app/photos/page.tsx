import type { Metadata } from "next";
import Image from "next/image";
import { photoAlbums } from "@/data/content";

export const metadata: Metadata = {
  title: "School photos",
};

export default function PhotosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-16 text-white md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,137,45,0.22),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Gallery
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            School photos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Favourite snapshots over the years — campus, students, administration
            and sports. Replace these with your own images anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ul className="grid gap-12">
          {photoAlbums.map((album, index) => (
            <li
              key={album.title}
              className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand/10">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-brand">
                  {album.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {album.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
