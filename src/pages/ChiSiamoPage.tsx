import { useRouter } from '../context/RouterContext';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { Section } from '../components/ui/Section';

export function ChiSiamoPage() {
  const { t } = useRouter();
  const page = t.pages.chiSiamo;

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {page.plannedBlocks.map((block) => (
            <div key={block.title} className="border border-oro/30 p-6">
              <h2 className="font-display text-lg font-semibold text-antracite">
                {block.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-antracite/80">
                {block.requirement}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <PlaceholderFrame
            aspect="16:9"
            title={t.common.awaitingBriefAssetLabel}
            description="Spazio predisposto per la galleria fotografica reale dell'atelier e degli interni in Viale Carlo Fassò, 28 a Borgosesia."
          />
        </div>
      </Container>
    </Section>
  );
}
