import { SERVICES_ARCHIVE } from '../data/services';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';

export function ServiziPage() {
  const { t, navigateToRoute } = useRouter();
  const page = t.pages.servizi;

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES_ARCHIVE.map((service) => {
            const copy = page.services[service.id];
            return (
              <article
                key={service.id}
                className="flex flex-col justify-between border border-oro/35 bg-[#F4F0E8] p-6"
              >
                <div>
                  <p className="text-xs font-medium tracking-wider text-bordeaux uppercase">
                    {copy.statusLabel}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-antracite">
                    {copy.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-antracite/80">
                    {copy.description}
                  </p>
                </div>
                <p className="mt-5 border-t border-oro/25 pt-4 text-xs text-antracite/70">
                  {service.sourceNote}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
          <Button
            variant="secondary"
            onClick={() => navigateToRoute('contatti')}
          >
            {page.ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
