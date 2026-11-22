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
      hero: {
        location: string;
        title: string;
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
        mediaBadge: string;
        mediaTitle: string;
        mediaDescription: string;
      };
      intro: {
        eyebrow: string;
        title: string;
        body: string;
      };
      categories: {
        eyebrow: string;
        title: string;
        actionLabel: string;
        items: Record<
          'caftani' | 'abbigliamento-donna' | 'cerimonia',
          {
            label: string;
            title: string;
            description: string;
          }
        >;
      };
      featured: {
        eyebrow: string;
        title: string;
        emptyEyebrow: string;
        emptyTitle: string;
        emptyBody: string;
        emptyPlaceholderTitle: string;
        emptyPlaceholderDescription: string;
        ctaLabel: string;
      };
      identity: {
        eyebrow: string;
        title: string;
        body: string;
        pendingNote: string;
        ctaLabel: string;
        mediaBadge: string;
        mediaTitle: string;
        mediaDescription: string;
      };
      reputation: {
        eyebrow: string;
        title: string;
        sourcePrefix: string;
        reviewsUnit: string;
        note: string;
        linkLabel: string;
      };
      location: {
        eyebrow: string;
        title: string;
        lead: string;
        addressLabel: string;
        phoneLabel: string;
        mapsLabel: string;
        instagramLabel: string;
        contactPageCta: string;
      };
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
      allCategoriesOverview: {
        eyebrow: string;
        title: string;
        description: string;
      };
      categoryDetails: Record<
        'caftani' | 'abbigliamento-donna' | 'cerimonia',
        {
          eyebrow: string;
          description: string;
        }
      >;
      emptyCatalogTitle: string;
      emptyCatalogDescription: string;
      emptyState: {
        eyebrow: string;
        title: string;
        categoryTitlePrefix: string;
        description: string;
        primaryCta: string;
        secondaryCta: string;
        resetFilterLabel: string;
      };
      linesSection: {
        eyebrow: string;
        title: string;
        selectLabel: string;
        selectedLabel: string;
      };
      productCard: {
        availabilityLabels: Record<'vendita' | 'noleggio' | 'su-misura', string>;
        priceOnRequestLabel: string;
        inquiryLabel: string;
        photoPendingTitle: string;
        photoPendingDescription: string;
        singleItemLabel: string;
        pluralItemsLabel: string;
      };
    };
    servizi: {
      eyebrow: string;
      heading: string;
      lead: string;
      heroNote: string;
      overviewTitle: string;
      overviewNote: string;
      pendingBadgeLabel: string;
      confirmedBadgeLabel: string;
      pendingDetailsHeading: string;
      sourceReferenceLabel: string;
      services: {
        'noleggio-caftani': {
          eyebrow: string;
          title: string;
          description: string;
          statusLabel: string;
          sourceLabel: string;
          pendingItems: readonly string[];
          atelierQuote: string;
        };
        'riparazioni-sartoriali': {
          eyebrow: string;
          title: string;
          description: string;
          statusLabel: string;
          sourceLabel: string;
          pendingItems: readonly string[];
          atelierQuote: string;
        };
      };
      contactCtaSection: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: string;
        secondaryCta: string;
      };
      ctaLabel: string;
    };
    chiSiamo: {
      eyebrow: string;
      heading: string;
      lead: string;
      heroHighlight: string;
      identity: {
        eyebrow: string;
        title: string;
        body: string;
        storySlotLabel: string;
        storySlotNote: string;
        pillars: readonly {
          label: string;
          title: string;
          description: string;
        }[];
      };
      tradition: {
        eyebrow: string;
        title: string;
        body: string;
        aestheticPoints: readonly {
          title: string;
          description: string;
        }[];
        ornamentCaption: string;
        ornamentSubcaption: string;
      };
      territory: {
        eyebrow: string;
        title: string;
        body: string;
        addressLabel: string;
        welcomeNoteLabel: string;
        welcomeNote: string;
        ctaLabel: string;
      };
      gallery: {
        eyebrow: string;
        title: string;
        lead: string;
        badgeText: string;
        slots: readonly {
          title: string;
          description: string;
        }[];
      };
      finalCta: {
        eyebrow: string;
        title: string;
        description: string;
        collectionsCta: string;
        contactsCta: string;
      };
    };
    contatti: {
      eyebrow: string;
      heading: string;
      lead: string;
      heroPrimaryCta: string;
      heroSecondaryCta: string;
      contactCard: {
        eyebrow: string;
        title: string;
        addressLabel: string;
        phoneLabel: string;
        instagramLabel: string;
        mapsButtonLabel: string;
      };
      hoursCard: {
        eyebrow: string;
        title: string;
        sourceBadge: string;
        note: string;
      };
      locationSection: {
        eyebrow: string;
        title: string;
        description: string;
        verifiedNote: string;
        ctaLabel: string;
      };
      accessibilitySection: {
        eyebrow: string;
        accessibilityTitle: string;
        accessibilityItems: readonly string[];
        paymentsTitle: string;
        paymentItems: readonly string[];
      };
      instagramSection: {
        eyebrow: string;
        title: string;
        description: string;
        ctaLabel: string;
      };
    };
    notFound: {
      heading: string;
      description: string;
      backHomeLabel: string;
    };
  };
}
