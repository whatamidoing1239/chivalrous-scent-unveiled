import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bottle from "@/assets/chivalrous-bottle.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHIVALROUS by Sarkar | Eau de Parfum for the Modern Gentleman" },
      {
        name: "description",
        content:
          "Chivalrous by Sarkar: bright spice, polished woods and smoky warmth. A 100 ml eau de parfum for the man who leads with courage and leaves with grace.",
      },
      { property: "og:title", content: "CHIVALROUS by Sarkar | Eau de Parfum" },
      {
        property: "og:description",
        content:
          "Power, without the noise. A commanding blend of bergamot, leather and oud in a deep navy chess-king bottle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "The Fragrance", href: "#fragrance" },
  { label: "Notes", href: "#notes" },
  { label: "Story", href: "#story" },
  { label: "Shop", href: "#shop" },
];

const NOTES = [
  {
    tier: "Top Notes",
    title: "The First Move",
    copy: "Bergamot, black pepper and saffron create a bright, confident opening.",
  },
  {
    tier: "Heart Notes",
    title: "The Noble Core",
    copy: "Cedarwood, iris and smooth leather reveal controlled strength.",
  },
  {
    tier: "Base Notes",
    title: "The Lasting Legacy",
    copy: "Oud, amber and patchouli leave a warm, memorable trail.",
  },
];

const ALT =
  "Sarkar Chivalrous eau de parfum bottle shaped like a deep navy chess king with silver SARKAR branding on the base";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-ivory rule-label ${className}`}>SARKAR</span>
  );
}

function Index() {
  const [added, setAdded] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="shrink-0">
            <Wordmark className="text-base sm:text-lg" />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-ivory"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#shop"
            className="rounded-sm border border-silver/50 px-4 py-2 text-xs tracking-[0.2em] uppercase text-ivory transition-colors hover:bg-ivory hover:text-ink sm:px-5"
          >
            Shop Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section id="fragrance" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-10 md:py-28">
            <div className="animate-rise">
              <p className="rule-label text-silver">Sarkar Eau de Parfum</p>
              <h1 className="mt-5 font-display text-6xl leading-[0.95] font-light tracking-tight text-ivory sm:text-7xl lg:text-8xl">
                CHIVALROUS
              </h1>
              <p className="mt-5 font-display text-2xl text-silver italic sm:text-3xl">
                Power, without the noise.
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                A commanding blend of bright spice, polished woods and smoky
                warmth—created for the man who leads with courage and leaves
                with grace.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="rounded-sm bg-ivory px-7 py-3.5 text-xs tracking-[0.2em] uppercase text-ink transition-opacity hover:opacity-85"
                >
                  Claim Your Signature
                </a>
                <a
                  href="#notes"
                  className="rounded-sm border border-silver/45 px-7 py-3.5 text-xs tracking-[0.2em] uppercase text-ivory transition-colors hover:border-ivory"
                >
                  Discover the Notes
                </a>
              </div>
              <p className="mt-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                100 ml · Eau de Parfum · Long-lasting
              </p>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="spotlight absolute inset-0 -m-10 rounded-full blur-2xl opacity-90"
              />
              <img
                src={bottle.url}
                alt={ALT}
                width={1004}
                height={1004}
                fetchPriority="high"
                className="relative w-full max-w-md rounded-sm shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>
        </section>

        {/* Notes */}
        <section id="notes" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <h2 className="max-w-2xl font-display text-4xl font-light text-ivory sm:text-5xl">
              A Composition of Quiet Strength
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {NOTES.map((n) => (
                <article
                  key={n.tier}
                  className="rounded-sm border border-border bg-card p-8 transition-colors hover:border-silver/40"
                >
                  <p className="rule-label text-silver">{n.tier}</p>
                  <h3 className="mt-4 font-display text-2xl text-ivory">{n.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {n.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="board-pattern border-t border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
            <div className="relative flex justify-center md:order-2">
              <div
                aria-hidden="true"
                className="spotlight absolute inset-0 -m-8 rounded-full blur-2xl opacity-70"
              />
              <img
                src={bottle.url}
                alt={ALT}
                loading="lazy"
                width={1004}
                height={1004}
                className="relative w-full max-w-sm rounded-sm shadow-[var(--shadow-elegant)]"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-4xl font-light text-ivory sm:text-5xl">
                Made for the Modern Gentleman
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Chivalrous reimagines strength as composure. Inspired by the
                king—the most deliberate piece on the board—it is a fragrance
                for those who move with purpose, protect what matters and never
                need to demand attention.
              </p>
            </div>
          </div>
        </section>

        {/* Shop */}
        <section id="shop" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
            <h2 className="font-display text-4xl font-light text-ivory sm:text-5xl">
              Make Your Move
            </h2>
            <div className="mt-10 rounded-sm border border-border bg-card p-8 text-left sm:p-12">
              <p className="rule-label text-silver">Chivalrous Eau de Parfum</p>
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
                <p className="font-display text-4xl text-ivory">₹4,999</p>
                <p className="text-sm text-muted-foreground">Size: 100 ml</p>
              </div>
              <p className="mt-6 border-t border-border pt-6 text-sm text-silver">
                Complimentary premium delivery
              </p>
              <button
                type="button"
                onClick={() => setAdded(true)}
                className="mt-8 w-full rounded-sm bg-ivory px-6 py-4 text-xs tracking-[0.2em] uppercase text-ink transition-opacity hover:opacity-85"
              >
                Add Chivalrous to My Collection
              </button>
              <p aria-live="polite" className="mt-4 min-h-5 text-center text-sm text-silver">
                {added ? "Added to your collection — we'll hold it for you at checkout." : ""}
              </p>
              <p className="mt-4 text-center text-xs tracking-[0.14em] uppercase text-muted-foreground">
                Secure checkout · Authentic Sarkar fragrance · Easy returns
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2">
          <div>
            <Wordmark className="text-lg" />
            <p className="mt-4 font-display text-xl text-silver italic">
              Fragrance for those who lead differently.
            </p>
            <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {["About", "Contact", "Shipping", "Returns", "Privacy", "Instagram"].map(
                (l) => (
                  <a
                    key={l}
                    href="#top"
                    className="text-sm text-muted-foreground transition-colors hover:text-ivory"
                  >
                    {l}
                  </a>
                ),
              )}
            </nav>
          </div>
          <form
            className="md:justify-self-end md:text-right"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <label htmlFor="email" className="rule-label text-silver">
              Enter the Inner Circle
            </label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground focus:border-silver focus:outline-none sm:w-64"
              />
              <button
                type="submit"
                className="rounded-sm border border-silver/50 px-5 py-3 text-xs tracking-[0.2em] uppercase text-ivory transition-colors hover:bg-ivory hover:text-ink"
              >
                Subscribe
              </button>
            </div>
            <p aria-live="polite" className="mt-3 min-h-5 text-sm text-silver">
              {subscribed ? "Welcome to the Inner Circle." : ""}
            </p>
          </form>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 Sarkar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
