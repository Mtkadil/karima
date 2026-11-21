import { ArrowRight, Clock, MapPin, Phone, Scissors, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { SERVICES_ARCHIVE } from '../data/services';
import { useRouter } from '../context/RouterContext';
import { findServiceDefinition, isServicePendingConfirmation } from '../utils/services';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { Label } from '../components/ui/Label';
import { Section } from '../components/ui/Section';

function AtelierOrnamentPanel({
  variant,
  caption,
}: {
  variant: 'caftan' | 'tailoring';
  caption: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[4px] border border-oro/40 bg-avorio p-8 text-center shadow-[var(--mk-shadow-card)] sm:p-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-oro/25"
      />

      {variant === 'caftan' ? (
        <svg
          viewBox="0 0 120 120"
          className="relative h-24 w-24 text-oro"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="24"
            y="24"
            width="72"
            height="72"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="24"
            y="24"
            width="72"
            height="72"
            transform="rotate(45 60 60)"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="60" cy="60" r="18" className="text-bordeaux" stroke="currentColor" strokeWidth="1" />
          <path d="M60 46L70 60L60 74L50 60Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 120 120"
          className="relative h-24 w-24 text-oro"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="1" />
          <path
            d="M32 60H88M60 32V88"
            className="text-bordeaux/55"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M46 46L74 74M74 46L46 74"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="60" cy="60" r="5" className="text-bordeaux" fill="currentColor" />
        </svg>
      )}

      <p className="relative mt-5 font-display text-sm tracking-[0.06em] text-antracite">
        {caption}
      </p>
      <p className="relative mt-1.5 text-[11px] font-medium tracking-[0.16em] text-bordeaux uppercase">
        Maison Karima · Borgosesia
      </p>
    </div>
  );
}

export function ServiziPage() {
  const { t, navigateToRoute } = useRouter();
  const page = t.pages.servizi;

  const rentalService = findServiceDefinition(SERVICES_ARCHIVE, 'noleggio-caftani');
  const tailoringService = findServiceDefinition(
    SERVICES_ARCHIVE,
    'riparazioni-sartoriali'
  );

  const rentalCopy = page.services['noleggio-caftani'];
  const tailoringCopy = page.services['riparazioni-sartoriali'];

  const rentalPending = isServicePendingConfirmation(rentalService);
  const tailoringPending = isServicePendingConfirmation(tailoringService);

  return (
    <>
      {/* 1. Hero introduttivo */}
      <Section className="pb-10 sm:pb-14 lg:pb-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Heading level={1} eyebrow={page.eyebrow}>
                {page.heading}
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base sm:text-lg leading-relaxed text-antracite-muted">
                {page.lead}
              </p>
              <Divider variant="ornament" className="my-6 max-w-xs" />
              <p className="max-w-[62ch] text-sm leading-relaxed text-antracite-muted">
                {page.heroNote}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[4px] border border-oro/40 bg-avorio-caldo p-6 shadow-[var(--mk-shadow-card)] sm:p-7">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                  {page.overviewTitle}
                </p>

                <ul className="mt-4 divide-y divide-oro/25">
                  {SERVICES_ARCHIVE.map((service) => {
                    const copy = page.services[service.id];
                    const isPending = isServicePendingConfirmation(service);
                    return (
                      <li
                        key={service.id}
                        className="flex flex-wrap items-center justify-between gap-2 py-3.5 first:pt-0 last:pb-0"
                      >
                        <a
                          href={`#${service.id}`}
                          className="font-display text-base font-medium text-antracite underline-offset-4 hover:text-bordeaux hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                        >
                          {copy.title}
                        </a>
                        <Label tone={isPending ? 'bordeaux' : 'oro'}>
                          {isPending
                            ? page.pendingBadgeLabel
                            : page.confirmedBadgeLabel}
                        </Label>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-4 border-t border-oro/25 pt-4 text-xs leading-relaxed text-antracite-muted">
                  {page.overviewNote}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Sezione dedicata al noleggio caftani */}
      {rentalService ? (
        <Section id={rentalService.id} surface="subtle">
          <Container>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                    {rentalCopy.eyebrow}
                  </span>
                  <Label tone={rentalPending ? 'bordeaux' : 'oro'}>
                    <Clock className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    {rentalCopy.statusLabel}
                  </Label>
                </div>

                <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.18] font-medium text-antracite">
                  {rentalCopy.title}
                </h2>

                <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                  {rentalCopy.description}
                </p>

                <div className="mt-6 rounded-[4px] border border-oro/35 bg-avorio p-5 sm:p-6">
                  <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] text-bordeaux uppercase">
                    <Sparkles className="h-3.5 w-3.5 text-oro" aria-hidden="true" />
                    <span>{page.pendingDetailsHeading}</span>
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-antracite-muted">
                    {rentalCopy.pendingItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-oro"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-xs text-antracite-muted">
                  <span className="font-medium text-antracite">
                    {page.sourceReferenceLabel}:
                  </span>{' '}
                  {rentalCopy.sourceLabel}
                </p>
              </div>

              <div className="lg:col-span-5">
                <AtelierOrnamentPanel
                  variant="caftan"
                  caption={rentalCopy.atelierQuote}
                />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 3. Sezione dedicata alle riparazioni e modifiche sartoriali */}
      {tailoringService ? (
        <Section id={tailoringService.id}>
          <Container>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <AtelierOrnamentPanel
                  variant="tailoring"
                  caption={tailoringCopy.atelierQuote}
                />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                    {tailoringCopy.eyebrow}
                  </span>
                  <Label tone={tailoringPending ? 'bordeaux' : 'oro'}>
                    <Clock className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    {tailoringCopy.statusLabel}
                  </Label>
                </div>

                <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.18] font-medium text-antracite">
                  {tailoringCopy.title}
                </h2>

                <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                  {tailoringCopy.description}
                </p>

                <div className="mt-6 rounded-[4px] border border-oro/35 bg-avorio-caldo p-5 sm:p-6">
                  <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] text-bordeaux uppercase">
                    <Scissors className="h-3.5 w-3.5 text-oro" aria-hidden="true" />
                    <span>{page.pendingDetailsHeading}</span>
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-antracite-muted">
                    {tailoringCopy.pendingItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-oro"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-xs text-antracite-muted">
                  <span className="font-medium text-antracite">
                    {page.sourceReferenceLabel}:
                  </span>{' '}
                  {tailoringCopy.sourceLabel}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 4. Sezione finale con invito a contattare la boutique */}
      <Section surface="subtle">
        <Container>
          <div className="relative rounded-[4px] border border-oro/40 bg-avorio p-7 shadow-[var(--mk-shadow-card)] sm:p-10 lg:p-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-oro/20"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                {page.contactCtaSection.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.2] font-medium text-antracite">
                {page.contactCtaSection.title}
              </h2>

              <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

              <p className="mx-auto max-w-[58ch] text-sm sm:text-base leading-relaxed text-antracite-muted">
                {page.contactCtaSection.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigateToRoute('contatti')}
                >
                  <span>{page.contactCtaSection.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href={BUSINESS_INFO.contacts.phone.href}
                >
                  <Phone className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                  <span>{page.contactCtaSection.secondaryCta}</span>
                </Button>
              </div>

              <p className="mt-6 inline-flex items-center justify-center gap-1.5 text-xs text-antracite-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-oro" aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.address.street} · {BUSINESS_INFO.address.postalCode}{' '}
                  {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province})
                </span>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
