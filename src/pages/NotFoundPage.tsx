import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';

export function NotFoundPage() {
  const { t, navigateToRoute } = useRouter();
  const page = t.pages.notFound;

  return (
    <Section>
      <Container>
        <Heading level={1}>{page.heading}</Heading>
        <p className="mt-4 max-w-prose text-base text-antracite/80">
          {page.description}
        </p>
        <div className="mt-6">
          <Button onClick={() => navigateToRoute('home')}>
            {page.backHomeLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
