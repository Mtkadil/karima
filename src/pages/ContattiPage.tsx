import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import type { DayOfWeek } from '../types/business';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
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

export function ContattiPage() {
  const { t } = useRouter();
  const page = t.pages.contatti;

  return (
    <Section>
      <Container>
        <Heading level={1} eyebrow={page.eyebrow}>
          {page.heading}
        </Heading>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-antracite/85">
          {page.lead}
        </p>

        <Divider className="my-8" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <div className="border border-oro/30 p-6">
              <h2 className="font-display text-xl font-semibold text-antracite">
                {t.common.addressTitle}
              </h2>
              <address className="mt-3 not-italic text-base leading-relaxed text-antracite/85">
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} ({BUSINESS_INFO.address.province}), {BUSINESS_INFO.address.region}
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={BUSINESS_INFO.contacts.phone.href}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.common.callLabel}
                </Button>
                <Button
                  variant="secondary"
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {t.common.mapsLabel}
                </Button>
              </div>
              <div className="mt-5 border-t border-oro/25 pt-4 text-sm text-antracite/80 space-y-2">
                <p>
                  <a
                    href={BUSINESS_INFO.contacts.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-bordeaux underline-offset-4 hover:underline"
                  >
                    {t.common.instagramLabel}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </p>
                <p className="text-xs text-antracite/70">{page.emailPending}</p>
              </div>
            </div>

            <div className="border border-oro/30 p-6">
              <h2 className="font-display text-xl font-semibold text-antracite">
                {t.common.accessibilityTitle}
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-antracite/85">
                <li>{BUSINESS_INFO.accessibilityAndPayments.parking}</li>
                <li>{BUSINESS_INFO.accessibilityAndPayments.visitExperience}</li>
              </ul>

              <h3 className="mt-5 font-display text-base font-semibold text-antracite">
                {t.common.paymentsTitle}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-antracite/85">
                {BUSINESS_INFO.accessibilityAndPayments.paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div className="border border-oro/30 p-6">
              <h2 className="font-display text-xl font-semibold text-antracite">
                {t.common.openingHoursTitle}
              </h2>
              <dl className="mt-4 divide-y divide-oro/20">
                {DAYS_ORDER.map((day) => {
                  const slots = BUSINESS_INFO.openingHours[day];
                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between py-2.5 text-sm"
                    >
                      <dt className="font-medium text-antracite">
                        {t.common.days[day]}
                      </dt>
                      <dd className="text-antracite/85 tabular-nums">
                        {slots[0]} · {slots[1]}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <PlaceholderFrame
              title={page.formSlotTitle}
              description={page.formSlotDescription}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
