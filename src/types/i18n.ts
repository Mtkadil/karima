export type Locale = 'it' | 'fr';

export type RouteId =
  | 'home'
  | 'collezioni'
  | 'servizi'
  | 'chi-siamo'
  | 'contatti';

export interface PageMeta {
  title: string;
  description: string;
}

export interface NavItem {
  id: RouteId;
  label: string;
  path: string;
}

export interface TranslationDictionary {
  locale: Locale;
  localeLabel: string;
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    pages: Record<RouteId, PageMeta>;
  };
  nav: {
    items: Record<RouteId, string>;
    primaryCta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    skipToContent: string;
    languageStatusLabel: string;
  };
  whatsapp: {
    floatingLabel: string;
    generalMessage: string;
    productMessagePrefix: string;
    pendingConfirmationNote: string;
  };
  common: {
    architecturalPhaseLabel: string;
    awaitingBriefAssetLabel: string;
    pendingConfirmationLabel: string;
    verifiedSourceLabel: string;
    callLabel: string;
    mapsLabel: string;
    instagramLabel: string;
    openingHoursTitle: string;
    accessibilityTitle: string;
    paymentsTitle: string;
    addressTitle: string;
    contactsTitle: string;
    days: Record<
      | 'lunedi'
      | 'martedi'
      | 'mercoledi'
      | 'giovedi'
      | 'venerdi'
      | 'sabato'
      | 'domenica',
      string
    >;
  };
  footer: {
    navigationTitle: string;
    storeTitle: string;
    complianceTitle: string;
    privacyPolicyLabel: string;
    cookiePolicyLabel: string;
    legalPendingNotice: string;
    copyright: string;
  };
  pages: {
    home: {
      eyebrow: string;
      heading: string;
      lead: string;
      primaryAction: string;
      secondaryAction: string;
      sectionsTitle: string;
      plannedSections: readonly { title: string; detail: string }[];
      reputationLabel: string;
    };
    collezioni: {
      eyebrow: string;
      heading: string;
      lead: string;
      categoriesTitle: string;
      allCategoriesLabel: string;
      categoryNames: {
        caftani: string;
        'abbigliamento-donna': string;
        cerimonia: string;
      };
      emptyCatalogTitle: string;
      emptyCatalogDescription: string;
      schemaReadyLabel: string;
    };
    servizi: {
      eyebrow: string;
      heading: string;
      lead: string;
      services: {
        'noleggio-caftani': {
          title: string;
          description: string;
          statusLabel: string;
        };
        'riparazioni-sartoriali': {
          title: string;
          description: string;
          statusLabel: string;
        };
      };
      ctaLabel: string;
    };
    chiSiamo: {
      eyebrow: string;
      heading: string;
      lead: string;
      plannedBlocks: readonly { title: string; requirement: string }[];
    };
    contatti: {
      eyebrow: string;
      heading: string;
      lead: string;
      emailPending: string;
      formSlotTitle: string;
      formSlotDescription: string;
    };
    notFound: {
      heading: string;
      description: string;
      backHomeLabel: string;
    };
  };
}
