import { MapPin, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { Section } from '../components/ui/Section';

export function HomePage() {
  const { t, navigateToRoute } = useRouter();
  const page = t.pages.home;

  return (
    <>
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <Heading level={1} eyebrow={page.eyebrow}>
                {page.heading}
              </Heading>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-antracite/85 sm:text-lg">
                {page.lead}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-antracite/80">
                <span className="inline-flex items-center gap-1.5 font-medium text-antracite tabular-nums">
                  <Star className="h-4 w-4 text-oro" aria-hidden="true" />
                  {BUSINESS_INFO.googleReputation.ratingValue.toFixed(1)} / 5
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {BUSINESS_INFO.googleReputation.reviewCount} recensioni ({BUSINESS_INFO.googleReputation.source})
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={() => navigateToRoute('collezioni')}>
                  {page.primaryAction}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigateToRoute('contatti')}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {page.secondaryAction}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <PlaceholderFrame
                aspect="4:3"
                title={t.common.awaitingBriefAssetLabel}
                description="Spazio predisposto per fotografia reale della boutique o delle collezioni (logo vettoriale/PNG e immagini autorizzate)."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="subtle">
        <Container>
          <Heading level={2} eyebrow={t.common.architecturalPhaseLabel}>
            {page.sectionsTitle}
          </Heading>
          <Divider className="my-6" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {page.plannedSections.map((block) => (
              <div
                key={block.title}
                className="border border-oro/30 bg-avorio p-6"
              >
                <h3 className="font-display text-lg font-semibold text-antracite">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-antracite/80">
                  {block.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
