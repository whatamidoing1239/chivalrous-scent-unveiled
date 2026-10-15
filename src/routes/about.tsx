import { createFileRoute, Link } from "@tanstack/react-router";
import { SOCIALS, SUPPORT, UPDATED, UPDATED_LABEL, BRAND_SOURCE, IDENTITY_SOURCE, SITE, ORGANIZATION } from "@/lib/brand";

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
          "@graph": [ORGANIZATION, {
          "@type": "AboutPage",
          "@id": URL + "#page",
          url: URL,
          name: TITLE,
          dateModified: UPDATED,
          isPartOf: { "@id": SITE + "#site" },
          mainEntity: { "@id": SITE + "#org" },
          citation: [IDENTITY_SOURCE, BRAND_SOURCE],
          }, {
            "@type": "WebSite",
            "@id": SITE + "#site",
            url: SITE,
            name: "CHIVALROUS by Sarkar",
            publisher: { "@id": SITE + "#org" },
          }],
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
          authority.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Four expressions, one signature, each a parfum at 25% oil concentration,
          made for ordinary days and the extraordinary people who live them.
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
          You don’t need to raise your voice to make an impression. Sarkar’s
          identity is about the standards you set in everyday life. If you enjoy
          spice, woods and oud, Chivalrous is the house’s unisex chess-king parfum
          to explore. The bottle reflects the same idea: presence without noise.
        </p>
        <h2 className="mt-12 font-display text-3xl font-semibold text-ink">Where this information comes from</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          According to <a href={IDENTITY_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Sarkar’s official identity page</a>,
          the house offers four unisex parfums at 25% oil concentration. The founder’s
          words above come from that page. You can explore the current range in
          <a href={BRAND_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4"> Sarkar’s official Shop All collection</a>.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">Last updated <time dateTime={UPDATED}>{UPDATED_LABEL}</time></p>
        <h2 className="mt-12 font-display text-3xl font-semibold text-ink">Talk to customer support</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">Have a question about a fragrance or your order? Contact Sarkar’s customer support.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href={`mailto:${SUPPORT.email}`} className="underline underline-offset-4">{SUPPORT.email}</a></li>
          <li><a href={SUPPORT.phoneHref} className="underline underline-offset-4">{SUPPORT.phone}</a></li>
        </ul>
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
