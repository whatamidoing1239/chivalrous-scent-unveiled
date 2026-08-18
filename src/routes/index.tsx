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

const SIZES = [
  { label: "50ML", price: 999 },
  { label: "100ML", price: 1499 },
  { label: "200ML", price: 2499 },
];

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans text-lg font-semibold tracking-[0.18em] uppercase sm:text-xl sm:tracking-[0.22em] ${className}`}
    >
      SARKAR
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm bg-secondary px-3 py-1.5 text-xs font-medium tracking-wide text-secondary-foreground">
      {children}
    </span>
  );
}

function Index() {
  const [added, setAdded] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("100ML");

  const currentPrice = SIZES.find((s) => s.label === selectedSize)?.price ?? 1499;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top banner */}
      <div className="bg-ink py-2.5 text-center">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-ivory">
          Claim two 7ml freebies with every order
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="p-1 text-foreground transition-colors hover:text-silver"
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          <a href="#top" className="absolute left-1/2 -translate-x-1/2">
            <Wordmark />
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="#shop"
              className="rounded-sm bg-ink px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-ivory transition-opacity hover:opacity-85 sm:px-5"
            >
              Buy Now
            </a>
            <button
              type="button"
              aria-label="Cart"
              className="p-1 text-foreground transition-colors hover:text-silver"
            >
              <CartIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-1 text-foreground transition-colors hover:text-silver"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-12 flex flex-col gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-light text-foreground transition-colors hover:text-silver"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main id="top">
        {/* Product hero */}
        <section id="fragrance" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20 lg:py-28">
            {/* Bottle image */}
            <div className="relative flex items-center justify-center md:sticky md:top-28">
              <div
                aria-hidden="true"
                className="spotlight absolute inset-0 -m-8 rounded-full blur-3xl opacity-80"
              />
              <img
                src={bottle.url}
                alt={ALT}
                width={1004}
                height={1004}
                fetchPriority="high"
                className="relative w-full max-w-md rounded-sm object-contain"
              />
            </div>

            {/* Product details */}
            <div className="animate-rise md:pt-12">
              <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                CHIVALROUS{" "}
                <span className="text-2xl font-normal text-silver sm:text-3xl">
                  (100ML)
                </span>
              </h1>

              <div className="mt-5 flex flex-wrap gap-2">
                <Tag>UNISEX</Tag>
                <Tag>WOODY</Tag>
                <Tag>PARFUM</Tag>
              </div>

              <p className="mt-5 text-sm font-semibold tracking-[0.12em] uppercase text-foreground">
                WORKDAYS · EVENINGS · THE EVERYDAY
              </p>

              <p className="mt-3 text-base text-muted-foreground">
                Power without the noise.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                A commanding blend of bright spice, polished woods and smoky
                warmth—created for the man who leads with courage and leaves
                with grace.
              </p>

              <div className="mt-8 flex items-baseline gap-3">
                <p className="font-display text-4xl font-semibold text-ink">
                  ₹{currentPrice.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-muted-foreground">Incl. of all taxes</p>
              </div>

              {/* Size selector */}
              <div className="mt-8">
                <p className="text-sm font-medium text-foreground">Choose size</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {SIZES.map((size) => {
                    const selected = selectedSize === size.label;
                    return (
                      <button
                        key={size.label}
                        type="button"
                        onClick={() => setSelectedSize(size.label)}
                        className={`flex flex-col items-center justify-center rounded-sm border px-5 py-3 transition-all ${
                          selected
                            ? "border-ink bg-ink text-ivory"
                            : "border-border bg-card text-foreground hover:border-silver"
                        }`}
                        aria-pressed={selected}
                      >
                        <span className="text-xs font-semibold tracking-wide">
                          CHIVALROUS
                        </span>
                        <span className="mt-0.5 text-[10px] tracking-wide opacity-80">
                          ({size.label})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-sm border border-border">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-lg text-foreground transition-colors hover:bg-secondary"
                  >
                    −
                  </button>
                  <span className="min-w-[3ch] px-2 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 text-lg text-foreground transition-colors hover:bg-secondary"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setAdded(true)}
                  className="flex-1 min-w-[12rem] rounded-sm bg-ink px-6 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-ivory transition-opacity hover:opacity-85"
                >
                  Add to Cart
                </button>
              </div>

              <p aria-live="polite" className="mt-4 min-h-5 text-sm text-silver">
                {added
                  ? "Added to your collection — we'll hold it for you at checkout."
                  : ""}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                * Ships within 24-36 hours of ordering.
              </p>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section id="notes" className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
            <h2 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
              A Composition of Quiet Strength
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {NOTES.map((n) => (
                <article
                  key={n.tier}
                  className="rounded-sm border border-border bg-background p-8 transition-colors hover:border-silver/40"
                >
                  <p className="rule-label text-silver">{n.tier}</p>
                  <h3 className="mt-4 font-display text-2xl text-ink">{n.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {n.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
            <div className="relative flex justify-center md:order-2">
              <div
                aria-hidden="true"
                className="spotlight absolute inset-0 -m-8 rounded-full blur-3xl opacity-70"
              />
              <img
                src={bottle.url}
                alt={ALT}
                loading="lazy"
                width={1004}
                height={1004}
                className="relative w-full max-w-sm rounded-sm object-contain"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
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

        {/* Offers / Shop */}
        <section id="shop" className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Offers
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-sm border border-border bg-background p-8">
                <p className="rule-label text-silver">Free Shipping</p>
                <p className="mt-3 text-ink">
                  Complimentary premium delivery on every order.
                </p>
              </div>
              <div className="rounded-sm border border-border bg-background p-8">
                <p className="rule-label text-silver">Build Your Own Bundle</p>
                <p className="mt-3 text-ink">
                  Pair Chivalrous with another Sarkar scent and save more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-ink text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2">
          <div>
            <Wordmark className="text-ivory" />
            <p className="mt-4 font-display text-xl text-silver italic">
              Fragrance for those who lead differently.
            </p>
            <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {["About", "Contact", "Shipping", "Returns", "Privacy", "Instagram"].map(
                (l) => (
                  <a
                    key={l}
                    href="#top"
                    className="text-sm text-silver transition-colors hover:text-ivory"
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
            <div className="mt-4 flex flex-col gap-3 sm:flex-row md:justify-end">
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-silver focus:outline-none sm:w-64"
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
        <div className="border-t border-ivory/10 py-6 text-center text-xs text-silver">
          © 2026 Sarkar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
