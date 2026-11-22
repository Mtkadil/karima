import {
  Accessibility,
  CreditCard,
  ExternalLink,
  Instagram,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import type { DayOfWeek } from '../types/business';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { Label } from '../components/ui/Label';
import { Section } from '../components/ui/Section';

const DAYS_ORDER: readonly DayOfWeek[] = [
  'lunedi',
  'martedi',
  'mercoledi',
  'giovedi',
  'venerdi',
  'sabato',
  'domenica',
];

function formatHourRange(range: string): string {
  return range.replace('-', '–');
}

export function ContattiPage() {
  const { t } = useRouter();
  const page = t.pages.contatti;

  return (
    <>
      {/* A. Hero Contatti */}
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

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={BUSINESS_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>{page.heroPrimaryCta}</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={BUSINESS_INFO.contacts.phone.href}
              >
                <Phone className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                <span>{page.heroSecondaryCta}</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* B. Informazioni di contatto & C. Orari di apertura */}
      <Section surface="subtle">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* B. Informazioni di contatto */}
            <div className="rounded-[4px] border border-oro/40 bg-avorio p-6 shadow-[var(--mk-shadow-card)] sm:p-8 lg:col-span-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                {page.contactCard.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-antracite">
                {page.contactCard.title}
              </h2>

              <Divider className="my-5" />

              <dl className="space-y-5 text-sm sm:text-base">
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-antracite-muted uppercase">
                    {page.contactCard.addressLabel}
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-antracite">
                    <span className="font-medium">{BUSINESS_INFO.brandName}</span>
                    <br />
                    <address className="not-italic text-antracite-muted">
                      {BUSINESS_INFO.address.street}
                      <br />
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} (
                      {BUSINESS_INFO.address.province}), {BUSINESS_INFO.address.region},{' '}
                      {BUSINESS_INFO.address.country}
                    </address>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-antracite-muted uppercase">
                    {page.contactCard.phoneLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={BUSINESS_INFO.contacts.phone.href}
                      className="inline-flex min-h-[44px] items-center gap-2 font-medium text-bordeaux underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux tabular-nums"
                    >
                      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{BUSINESS_INFO.contacts.phone.display}</span>
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-antracite-muted uppercase">
                    {page.contactCard.instagramLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={BUSINESS_INFO.contacts.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 font-medium text-bordeaux underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                    >
                      <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{BUSINESS_INFO.contacts.social.instagram.handle}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-oro/25 pt-5">
                <Button
                  variant="secondary"
                  size="md"
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 text-bordeaux" aria-hidden="true" />
                  <span>{page.contactCard.mapsButtonLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* C. Orari di apertura */}
            <div className="flex flex-col justify-between rounded-[4px] border border-oro/40 bg-avorio p-6 shadow-[var(--mk-shadow-card)] sm:p-8 lg:col-span-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                    {page.hoursCard.eyebrow}
                  </p>
                  <Label tone="oro">{page.hoursCard.sourceBadge}</Label>
                </div>
                <h2 className="mt-2 font-display text-2xl font-medium text-antracite">
                  {page.hoursCard.title}
                </h2>

                <Divider className="my-5" />

                <dl className="divide-y divide-oro/20">
                  {DAYS_ORDER.map((day) => {
                    const slots = BUSINESS_INFO.openingHours[day];
                    return (
                      <div
                        key={day}
                        className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        <dt className="font-medium text-antracite">
                          {t.common.days[day]}
                        </dt>
                        <dd className="text-antracite-muted tabular-nums">
                          {formatHourRange(slots[0])} / {formatHourRange(slots[1])}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <p className="mt-5 border-t border-oro/25 pt-4 text-xs leading-relaxed text-antracite-muted">
                {page.hoursCard.note}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* D. Dove siamo */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Heading level={2} eyebrow={page.locationSection.eyebrow}>
                {page.locationSection.title}
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                {page.locationSection.description}
              </p>
              <div className="mt-6">
                <Button
                  variant="primary"
                  size="md"
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{page.locationSection.ctaLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] border border-oro/40 bg-avorio-caldo p-6 shadow-[var(--mk-shadow-card)] sm:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2.5 border border-oro/20"
                />
                <div className="relative">
                  <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-bordeaux uppercase">
                    <MapPin className="h-3.5 w-3.5 text-oro" aria-hidden="true" />
                    <span>{BUSINESS_INFO.brandName}</span>
                  </p>
                  <address className="mt-3 not-italic text-base leading-relaxed text-antracite">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} (
                    {BUSINESS_INFO.address.province})
                    <br />
                    <span className="text-sm text-antracite-muted">
                      {BUSINESS_INFO.address.region}, {BUSINESS_INFO.address.country}
                    </span>
                  </address>
                  <Divider className="my-4" />
                  <p className="text-xs leading-relaxed text-antracite-muted">
                    {page.locationSection.verifiedNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E. Accessibilità e pagamenti */}
      <Section surface="subtle">
        <Container>
          <p className="mb-6 text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
            {page.accessibilitySection.eyebrow}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <div className="rounded-[4px] border border-oro/35 bg-avorio p-6 shadow-[var(--mk-shadow-card)] sm:p-7">
              <div className="flex items-center gap-2.5">
                <Accessibility className="h-5 w-5 text-oro" aria-hidden="true" />
                <h2 className="font-display text-xl font-medium text-antracite">
                  {page.accessibilitySection.accessibilityTitle}
                </h2>
              </div>
              <Divider className="my-4" />
              <ul className="space-y-2.5 text-sm leading-relaxed text-antracite-muted">
                {page.accessibilitySection.accessibilityItems.map((item) => (
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

            <div className="rounded-[4px] border border-oro/35 bg-avorio p-6 shadow-[var(--mk-shadow-card)] sm:p-7">
              <div className="flex items-center gap-2.5">
                <CreditCard className="h-5 w-5 text-oro" aria-hidden="true" />
                <h2 className="font-display text-xl font-medium text-antracite">
                  {page.accessibilitySection.paymentsTitle}
                </h2>
              </div>
              <Divider className="my-4" />
              <ul className="space-y-2.5 text-sm leading-relaxed text-antracite-muted">
                {page.accessibilitySection.paymentItems.map((method) => (
                  <li key={method} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-oro"
                    />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* F. Instagram */}
      <Section>
        <Container>
          <div className="relative rounded-[4px] border border-oro/40 bg-avorio-caldo/70 p-7 shadow-[var(--mk-shadow-card)] sm:p-10 lg:p-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-oro/20"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase">
                {page.instagramSection.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] leading-[1.2] font-medium text-antracite">
                {page.instagramSection.title}
              </h2>

              <Divider variant="ornament" className="mx-auto my-6 max-w-xs" />

              <p className="mx-auto max-w-[58ch] text-sm sm:text-base leading-relaxed text-antracite-muted">
                {page.instagramSection.description}
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  href={BUSINESS_INFO.contacts.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>{page.instagramSection.ctaLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
