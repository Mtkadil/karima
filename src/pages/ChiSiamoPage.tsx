import { ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { Label } from '../components/ui/Label';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { Section } from '../components/ui/Section';

function TraditionGeometryFrame({
  caption,
  subcaption,
}: {
  caption: string;
  subcaption: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[4px] border border-oro/40 bg-avorio-caldo p-8 text-center shadow-[var(--mk-shadow-card)] sm:p-10 lg:p-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-oro/25"
      />

      <svg
        viewBox="0 0 140 140"
        className="relative h-28 w-28 text-oro"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="26"
          y="26"
          width="88"
          height="88"
          stroke="currentColor"
          strokeWidth="1"
        />
        <rect
          x="26"
          y="26"
          width="88"
          height="88"
          transform="rotate(45 70 70)"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="70"
          cy="70"
          r="26"
          className="text-bordeaux/70"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M70 48L86 70L70 92L54 70Z"
          className="text-bordeaux"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="70"
          cy="70"
          r="4"
          className="text-bordeaux"
          fill="currentColor"
        />
      </svg>

      <p className="relative mt-6 font-display text-base tracking-[0.04em] text-antracite">
        {caption}
      </p>
      <p className="relative mt-1.5 text-[11px] font-medium tracking-[0.16em] text-bordeaux uppercase">
        {subcaption}
      </p>
    </div>
  );
}

export function ChiSiamoPage() {
  const { t, navigateToRoute } = useRouter();
  const page = t.pages.chiSiamo;

  return (
    <>
      {/* A. Hero editoriale */}
      <Section className="pb-10 sm:pb-14 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <Heading level={1} eyebrow={page.eyebrow}>
              {page.heading}
            </Heading>
            <p className="mt-4 max-w-[65ch] text-base sm:text-lg leading-relaxed text-antracite-muted">
              {page.lead}
            </p>
            <Divider variant="ornament" className="my-6 max-w-xs" />
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-bordeaux uppercase">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-oro" aria-hidden="true" />
              <span>{page.heroHighlight}</span>
            </p>
          </div>
        </Container>
      </Section>

      {/* B. Identità Maison Karima */}
      <Section surface="subtle">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Heading level={2} eyebrow={page.identity.eyebrow}>
                {page.identity.title}
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                {page.identity.body}
              </p>

              <div className="mt-6 rounded-[4px] border border-oro/35 bg-avorio p-5 sm:p-6">
                <Label tone="oro">{page.identity.storySlotLabel}</Label>
                <p className="mt-3 text-sm leading-relaxed text-antracite-muted">
                  {page.identity.storySlotNote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-4">
                {page.identity.pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-[4px] border border-oro/35 bg-avorio p-5 shadow-[var(--mk-shadow-card)] sm:p-6"
                  >
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                      {pillar.label}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-medium text-antracite">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-antracite-muted">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* C. Tradizione e attenzione ai dettagli */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <TraditionGeometryFrame
                caption={page.tradition.ornamentCaption}
                subcaption={page.tradition.ornamentSubcaption}
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <Heading level={2} eyebrow={page.tradition.eyebrow}>
                {page.tradition.title}
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                {page.tradition.body}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {page.tradition.aestheticPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-[4px] border border-oro/30 bg-avorio-caldo/60 p-4 sm:p-5"
                  >
                    <h3 className="font-display text-base font-medium text-antracite">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-antracite-muted">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* D. La boutique a Borgosesia */}
      <Section surface="subtle">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Heading level={2} eyebrow={page.territory.eyebrow}>
                {page.territory.title}
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                {page.territory.body}
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => navigateToRoute('contatti')}
                >
                  <span>{page.territory.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[4px] border border-oro/40 bg-avorio p-6 shadow-[var(--mk-shadow-card)] sm:p-7">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                  {page.territory.addressLabel}
                </p>
                <p className="mt-2 font-display text-xl font-medium text-antracite">
                  {BUSINESS_INFO.brandName}
                </p>
                <address className="mt-2 not-italic text-sm leading-relaxed text-antracite-muted">
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} (
                  {BUSINESS_INFO.address.province}), {BUSINESS_INFO.address.region}
                </address>

                <Divider className="my-4" />

                <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                  {page.territory.welcomeNoteLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-antracite-muted">
                  {page.territory.welcomeNote}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E. Galleria fotografica */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Heading level={2} eyebrow={page.gallery.eyebrow}>
              {page.gallery.title}
            </Heading>
            <p className="mt-3 text-base leading-relaxed text-antracite-muted">
              {page.gallery.lead}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {page.gallery.slots.map((slot) => (
              <PlaceholderFrame
                key={slot.title}
                aspect="4:3"
                badgeText={page.gallery.badgeText}
                title={slot.title}
                description={slot.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* F. CTA finale */}
      <Section surface="subtle">
        <Container>
          <div className="relative rounded-[4px] border border-oro/40 bg-avorio p-7 shadow-[var(--mk-shadow-card)] sm:p-10 lg:p-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-oro/20"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                {page.finalCta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.2] font-medium text-antracite">
                {page.finalCta.title}
              </h2>

              <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

              <p className="mx-auto max-w-[58ch] text-sm sm:text-base leading-relaxed text-antracite-muted">
                {page.finalCta.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigateToRoute('collezioni')}
                >
                  <span>{page.finalCta.collectionsCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => navigateToRoute('contatti')}
                >
                  <span>{page.finalCta.contactsCta}</span>
                  <ArrowRight className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
