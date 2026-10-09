import { createFileRoute, Link } from "@tanstack/react-router";
import { SOCIALS } from "./index";

const URL = "https://chivalrous-scent-unveiled.lovable.app/about";
const TITLE = "Know Sarkar | The House Behind CHIVALROUS";
const DESC =
  "Sarkar is a premium, unisex fragrance house founded by Bhuvan Bam. Four parfums at 25% oil concentration, built on everyday authority.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: URL,
          name: TITLE,
          mainEntity: {
            "@type": "Organization",
            name: "Sarkar",
            founder: { "@type": "Person", name: "Bhuvan Bam" },
            sameAs: SOCIALS.map((s) => s.href).concat("https://www.sarkar.store/"),
          },
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <Link to="/" className="text-sm font-semibold tracking-[0.18em] uppercase">
          SARKAR
        </Link>
        <p className="mt-12 rule-label text-silver">The Identity</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Know Sarkar
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Sarkar is a premium, unisex fragrance house built on everyday
          authority. It offers four expressions under one signature, and each is
          a parfum at 25% oil concentration, made for ordinary days and the
          extraordinary people who live them.
        </p>
        <blockquote className="mt-8 border-l-2 border-ink pl-4 text-lg italic text-ink">
          “Anyone can raise their voice. Few can raise the standards. Sarkar is
          for the ones who set it. Built for you. The One &amp; Only.”
          <footer className="mt-2 text-sm not-italic text-muted-foreground">
            — Bhuvan Bam, Founder
          </footer>
        </blockquote>
        <h2 className="mt-12 font-display text-3xl font-semibold text-ink">
          Built for the aspirational leader
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Sarkar is for those who understand that presence is a choice. Unisex in
          spirit and uncompromising in intent, it is made for those who own the
          air they breathe. Chivalrous, the house's chess-king parfum, carries
          that idea in a blend of spice, woods and oud.
        </p>
        <h2 className="mt-12 font-display text-3xl font-semibold text-ink">Find Sarkar</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a href="https://www.sarkar.store/" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              sarkar.store, the official store
            </a>
          </li>
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer me">
                {s.label}: @houseofsarkar
              </a>
            </li>
          ))}
        </ul>
        <Link to="/" className="mt-12 inline-block rounded-sm bg-ink px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase text-ivory">
          Discover Chivalrous
        </Link>
      </div>
    </main>
  );
}
