import { ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../types/catalog';
import { useRouter } from '../context/RouterContext';
import { BrandMark } from '../components/ui/BrandMark';
import { Button } from '../components/ui/Button';
import { CollectionCard } from '../components/ui/CollectionCard';
import { Container } from '../components/ui/Container';
import { Divider } from '../components/ui/Divider';
import { EditorialBlock } from '../components/ui/EditorialBlock';
import { Heading } from '../components/ui/Heading';
import { Label } from '../components/ui/Label';
import { PlaceholderFrame } from '../components/ui/PlaceholderFrame';
import { ProductCard } from '../components/ui/ProductCard';
import { Section } from '../components/ui/Section';

const PALETTE_TOKENS = [
  {
    name: 'Avorio',
    hex: '#FAF8F5',
    token: '--mk-color-avorio',
    role: 'Sfondi principali e respiro editoriale',
    swatchClass: 'bg-avorio border border-oro/40',
  },
  {
    name: 'Avorio Caldo',
    hex: '#F4EFE6',
    token: '--mk-color-avorio-caldo',
    role: 'Superfici secondarie, card e sezioni alternate',
    swatchClass: 'bg-avorio-caldo border border-oro/40',
  },
  {
    name: 'Oro',
    hex: '#C5A059',
    token: '--mk-color-oro',
    role: 'Bordi sottili, cornici e dettagli discreti',
    swatchClass: 'bg-oro',
  },
  {
    name: 'Bordeaux',
    hex: '#5C1E2E',
    token: '--mk-color-bordeaux',
    role: 'Elementi distintivi, CTA e stati attivi',
    swatchClass: 'bg-bordeaux',
  },
  {
    name: 'Antracite',
    hex: '#222222',
    token: '--mk-color-antracite',
    role: 'Tipografia primaria e massimo contrasto',
    swatchClass: 'bg-antracite',
  },
];

const DEMO_PRODUCT_SCHEMA_PREVIEW: Product = {
  id: 'DEMO-SCHEMA',
  nome: 'Modello Dimostrativo',
  slug: 'modello-dimostrativo',
  categoria: 'caftani',
  modalita: ['vendita', 'su-misura'],
  descrizione:
    'Anteprima visiva dello schema prodotto. Nessun capo reale o prezzo inserito in Fase 2.',
  prezzo: null,
  mostra_prezzo: false,
  valuta: 'EUR',
  taglie: [],
  colori: [],
  immagini: [],
  in_evidenza: false,
  visibile: true,
};

export function DesignSystemPreviewPage() {
  const { navigateToRoute } = useRouter();
  const [selectedDemoTab, setSelectedDemoTab] = useState<'tutti' | 'caftani'>('tutti');
  const [inspectedNotice, setInspectedNotice] = useState<string | null>(null);

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Label tone="bordeaux">Anteprima temporanea · Fase 2/9</Label>
              <Heading level={1} className="mt-4">
                Identità Visiva e Design System
              </Heading>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                Sistema visivo di riferimento per Maison Karima (Borgosesia):
                palette, gerarchia tipografica, spaziature e componenti
                riutilizzabili. Tutti i contenuti fotografici e di catalogo
                restano segnaposto fino all’acquisizione ufficiale dalla titolare.
              </p>
            </div>
            <Button variant="secondary" onClick={() => navigateToRoute('home')}>
              Torna alla Home
            </Button>
          </div>
        </Container>
      </Section>

      <Section surface="subtle">
        <Container>
          <Heading level={2} eyebrow="01 · Palette ufficiale">
            Colori e Token CSS
          </Heading>
          <Divider variant="ornament" className="my-6" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PALETTE_TOKENS.map((item) => (
              <div
                key={item.hex}
                className="rounded-[4px] border border-oro/30 bg-avorio p-4 shadow-[var(--mk-shadow-card)]"
              >
                <div className={`h-20 w-full rounded-[2px] ${item.swatchClass}`} />
                <p className="mt-3 font-display text-lg font-medium text-antracite">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs font-medium text-bordeaux tabular-nums">
                  {item.hex}
                </p>
                <p className="mt-1 text-[11px] text-antracite-muted">
                  {item.token}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-antracite-muted">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Heading level={2} eyebrow="02 · Marchio">
                Logo e Brand Mark
              </Heading>
              <Divider className="my-5" />
              <div className="flex flex-col gap-6 rounded-[4px] border border-oro/30 bg-avorio-caldo p-8">
                <div>
                  <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-antracite-muted uppercase">
                    Variante compatta (Header & Footer)
                  </p>
                  <div className="border border-oro/25 bg-avorio px-5 py-4">
                    <BrandMark variant="compact" />
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-antracite-muted uppercase">
                    Variante editoriale (Sezioni atelier)
                  </p>
                  <div className="flex justify-center border border-oro/25 bg-avorio px-6 py-8">
                    <BrandMark variant="editorial" subtitle="Borgosesia" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Heading level={2} eyebrow="03 · Tipografia">
                Playfair Display & Plus Jakarta Sans
              </Heading>
              <Divider className="my-5" />
              <div className="space-y-6 rounded-[4px] border border-oro/30 bg-avorio p-6 sm:p-8">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.14em] text-antracite-muted uppercase">
                    Display H1 · Playfair Display
                  </p>
                  <p className="mt-1 font-display text-3xl sm:text-4xl font-medium text-antracite">
                    L’eleganza sartoriale tra tradizione e presente
                  </p>
                </div>

                <Divider />

                <div>
                  <p className="text-[11px] font-medium tracking-[0.14em] text-antracite-muted uppercase">
                    Sezione H2 · Playfair Display
                  </p>
                  <p className="mt-1 font-display text-2xl font-medium text-antracite">
                    Caftani marocchini e abbigliamento femminile
                  </p>
                </div>

                <Divider />

                <div>
                  <p className="text-[11px] font-medium tracking-[0.14em] text-antracite-muted uppercase">
                    Corpo testo & Numeri tabellari · Plus Jakarta Sans
                  </p>
                  <p className="mt-1 max-w-[65ch] text-base leading-relaxed text-antracite-muted">
                    Testo progettato per un’elevata leggibilità su smartphone e
                    desktop, con interlinea ariosa (1.6) e contrasto pieno
                    Antracite su Avorio. Orari: <span className="tabular-nums font-medium text-antracite">09:00–12:00 · 15:30–19:00</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="subtle">
        <Container>
          <Heading level={2} eyebrow="04 · Interazione">
            Pulsanti, Etichette e Stati
          </Heading>
          <Divider variant="ornament" className="my-6" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[4px] border border-oro/30 bg-avorio p-6">
              <h3 className="font-display text-lg font-medium text-antracite">
                Varianti Pulsanti
              </h3>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button variant="primary">
                  Primario Bordeaux
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button variant="secondary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Secondario Oro
                </Button>
                <Button variant="outline">Outline Bordeaux</Button>
                <Button variant="ghost">Azione Testuale</Button>
                <Button variant="primary" disabled>
                  Disabilitato
                </Button>
              </div>
            </div>

            <div className="rounded-[4px] border border-oro/30 bg-avorio p-6">
              <h3 className="font-display text-lg font-medium text-antracite">
                Etichette Editoriali e Filtri Attivi
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Label tone="neutral">Etichetta Neutra</Label>
                <Label tone="oro">Dettaglio Oro</Label>
                <Label tone="bordeaux">Stato Bordeaux</Label>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDemoTab('tutti')}
                  aria-pressed={selectedDemoTab === 'tutti'}
                  className={`min-h-[40px] rounded-[2px] px-4 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors cursor-pointer ${
                    selectedDemoTab === 'tutti'
                      ? 'bg-bordeaux text-avorio'
                      : 'border border-oro/45 text-antracite hover:border-bordeaux'
                  }`}
                >
                  Tutte le linee
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDemoTab('caftani')}
                  aria-pressed={selectedDemoTab === 'caftani'}
                  className={`min-h-[40px] rounded-[2px] px-4 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors cursor-pointer ${
                    selectedDemoTab === 'caftani'
                      ? 'bg-bordeaux text-avorio'
                      : 'border border-oro/45 text-antracite hover:border-bordeaux'
                  }`}
                >
                  Caftani marocchini
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading level={2} eyebrow="05 · Card e Contenitori Fotografici">
            Collezioni, Prodotti e Segnaposto
          </Heading>
          <Divider variant="ornament" className="my-6" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <CollectionCard
              categoryLabel="Categoria confermata"
              title="Caftani marocchini"
              description="Contenitore standard 4:3 per la linea caftani. Immagini e testi reali verranno collegati nella fase dedicata."
              onSelect={() => navigateToRoute('collezioni')}
            />

            <CollectionCard
              categoryLabel="Categoria confermata"
              title="Abbigliamento femminile"
              description="Contenitore uniforme con proporzione 4:3, bordo oro tenue e micro-elevazione al passaggio."
              onSelect={() => navigateToRoute('collezioni')}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <ProductCard
                product={DEMO_PRODUCT_SCHEMA_PREVIEW}
                categoryDisplay="Anteprima schema"
                demoNotice="Solo struttura"
                onInspect={(item) =>
                  setInspectedNotice(`Anteprima componente per "${item.nome}" (nessun articolo reale pubblicato).`)
                }
              />
            </div>

            <div className="space-y-8 lg:col-span-8">
              <PlaceholderFrame
                aspect="16:9"
                title="Contenitore fotografico 16:9"
                description="Formato previsto per aperture editoriali e fotografie d'ambiente della boutique."
              />
              <EditorialBlock
                eyebrow="06 · Sezione Editoriale"
                title="Spazi bianchi, misura tipografica e ritmo visivo"
                withOrnament
                body="Le sezioni editoriali utilizzano righe contenute entro 65 caratteri, ampi margini verticali e divisori geometrici essenziali in Oro (#C5A059) per valorizzare la futura fotografia reale senza competere con essa."
                actions={
                  <Button
                    variant="secondary"
                    onClick={() => navigateToRoute('contatti')}
                  >
                    Verifica pagina Contatti
                  </Button>
                }
              />
            </div>
          </div>

          {inspectedNotice ? (
            <p className="mt-4 text-sm text-bordeaux" role="status">
              {inspectedNotice}
            </p>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
