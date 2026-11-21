import type { TranslationDictionary } from '../../types/i18n';

/**
 * Struttura predisposta per la futura versione francese (FR),
 * prevista dal brief in attesa di conferma finale della titolare.
 */
export const FR_DICTIONARY: TranslationDictionary = {
  locale: 'fr',
  localeLabel: 'Français',
  meta: {
    siteName: 'Maison Karima',
    defaultTitle: 'Maison Karima — Prêt-à-porter féminin et Caftans marocains à Borgosesia',
    defaultDescription:
      'Maison Karima à Borgosesia (VC, Italie) : boutique de prêt-à-porter féminin et caftans marocains. Viale Carlo Fassò, 28.',
    pages: {
      home: {
        title: 'Maison Karima — Prêt-à-porter féminin et Caftans marocains',
        description: 'Boutique Maison Karima à Borgosesia : adresse, horaires et collections.',
      },
      collezioni: {
        title: 'Collections — Maison Karima',
        description: 'Catalogue caftans marocains et prêt-à-porter féminin.',
      },
      servizi: {
        title: 'Services — Maison Karima',
        description: 'Location de caftans et retouches sur mesure (en attente de confirmation).',
      },
      'chi-siamo': {
        title: 'À propos — Maison Karima',
        description: 'Histoire de la boutique Maison Karima à Borgosesia.',
      },
      contatti: {
        title: 'Contact et Accès — Maison Karima',
        description: 'Adresse Viale Carlo Fassò 28, horaires et téléphone +39 329 921 6661.',
      },
    },
  },
  nav: {
    items: {
      home: 'Accueil',
      collezioni: 'Collections',
      servizi: 'Services',
      'chi-siamo': 'À propos',
      contatti: 'Contact',
    },
    primaryCta: 'Nous contacter',
    openMenuLabel: 'Ouvrir le menu',
    closeMenuLabel: 'Fermer le menu',
    skipToContent: 'Aller au contenu principal',
    languageStatusLabel: 'Langue : Français (aperçu structurel)',
  },
  whatsapp: {
    floatingLabel: 'Contacter sur WhatsApp',
    generalMessage: 'Bonjour Maison Karima, je souhaite recevoir des informations.',
    productMessagePrefix: 'Bonjour Maison Karima, je souhaite vérifier la disponibilité pour : ',
    pendingConfirmationNote:
      'Lien direct vers +39 329 921 6661 (activation WhatsApp Business à confirmer).',
  },
  common: {
    architecturalPhaseLabel: 'Phase 1 · Architecture',
    awaitingBriefAssetLabel: 'En attente des visuels officiels',
    pendingConfirmationLabel: 'À confirmer avec la direction',
    verifiedSourceLabel: 'Information vérifiée (brief v1.1)',
    callLabel: 'Appeler +39 329 921 6661',
    mapsLabel: 'Ouvrir dans Google Maps',
    instagramLabel: 'Instagram @maison_karima_sartoria_kaftan',
    openingHoursTitle: 'Horaires d’ouverture vérifiés',
    accessibilityTitle: 'Accessibilité et visite',
    paymentsTitle: 'Moyens de paiement acceptés',
    addressTitle: 'Adresse de la boutique',
    contactsTitle: 'Coordonnées directes',
    days: {
      lunedi: 'Lundi',
      martedi: 'Mardi',
      mercoledi: 'Mercredi',
      giovedi: 'Jeudi',
      venerdi: 'Vendredi',
      sabato: 'Samedi',
      domenica: 'Dimanche',
    },
  },
  footer: {
    navigationTitle: 'Navigation',
    storeTitle: 'Boutique Borgosesia',
    complianceTitle: 'Mentions légales et RGPD',
    privacyPolicyLabel: 'Politique de confidentialité (à finaliser)',
    cookiePolicyLabel: 'Politique de cookies (à finaliser)',
    legalPendingNotice:
      'Raison sociale, numéro de TVA, siège légal et e-mail public en attente de confirmation.',
    copyright: '© 2026 Maison Karima — Borgosesia (VC).',
  },
  pages: {
    home: {
      hero: {
        location: 'Borgosesia, Piémont',
        title: 'Maison Karima',
        subtitle: 'Boutique de prêt-à-porter féminin et caftans marocains.',
        primaryCta: 'Explorer les collections',
        secondaryCta: 'Découvrir la boutique',
        mediaBadge: 'Visuel officiel à venir',
        mediaTitle: 'Maison Karima · Borgosesia',
        mediaDescription:
          'Emplacement prévu pour une photographie réelle et autorisée de la boutique ou des collections.',
      },
      intro: {
        eyebrow: 'La Boutique',
        title: 'Prêt-à-porter féminin et caftans marocains à Borgosesia',
        body: 'Maison Karima est une boutique dédiée au prêt-à-porter féminin et aux caftans marocains. Un espace soigné réunissant des pièces féminines contemporaines et la tradition du caftan marocain.',
      },
      categories: {
        eyebrow: 'Catégories Principales',
        title: 'Les lignes de la boutique',
        actionLabel: 'Voir la collection',
        items: {
          caftani: {
            label: 'Tradition Marocaine',
            title: 'Caftans marocains',
            description:
              'Caftans marocains aux lignes raffinées, alliant savoir-faire traditionnel et allure contemporaine.',
          },
          'abbigliamento-donna': {
            label: 'Collection Femme',
            title: 'Prêt-à-porter féminin',
            description:
              'Sélection de prêt-à-porter féminin pensée pour le style et l’élégance du quotidien.',
          },
          cerimonia: {
            label: 'Occasions Spéciales',
            title: 'Cérémonie',
            description:
              'Pièces dédiées aux célébrations et événements particuliers, en attente du catalogue officiel.',
          },
        },
      },
      featured: {
        eyebrow: 'Sélection Collections',
        title: 'Pièces mises en avant',
        emptyEyebrow: 'Catalogue photographique en préparation',
        emptyTitle: 'Les collections seront présentées dès réception des visuels officiels',
        emptyBody:
          'L’archive produits est prête à accueillir les photographies réelles et les fiches détaillées des modèles.',
        emptyPlaceholderTitle: 'Sélection en attente du catalogue réel',
        emptyPlaceholderDescription:
          'Aucun produit ou tarif fictif publié avant validation officielle.',
        ctaLabel: 'Explorer les collections',
      },
      identity: {
        eyebrow: 'Identité et Univers du Caftan',
        title: 'Soin sartorial et élégance contemporaine',
        body: 'Maison Karima réunit l’élégance du prêt-à-porter féminin et l’univers du caftan marocain dans une boutique accueillante à Borgosesia.',
        pendingNote:
          'L’histoire officielle de la maison et les détails des services seront publiés après validation par la direction.',
        ctaLabel: 'Découvrir À propos',
        mediaBadge: 'Emplacement éditorial',
        mediaTitle: 'Atelier et détails textiles',
        mediaDescription:
          'Espace réservé aux photographies réelles des tissus et de la boutique.',
      },
      reputation: {
        eyebrow: 'Confiance et Réputation',
        title: 'Note vérifiée des visiteurs',
        sourcePrefix: 'Source :',
        reviewsUnit: 'avis vérifiés',
        note: 'Note moyenne issue directement de la fiche Google Business Profile de la boutique.',
        linkLabel: 'Voir la fiche Google Maps',
      },
      location: {
        eyebrow: 'Accès et Contact',
        title: 'Visiter la boutique à Borgosesia',
        lead: 'Retrouvez-nous Viale Carlo Fassò à Borgosesia pour découvrir la boutique.',
        addressLabel: 'Adresse',
        phoneLabel: 'Téléphone',
        mapsLabel: 'Ouvrir dans Google Maps',
        instagramLabel: 'Suivre sur Instagram',
        contactPageCta: 'Page Contact complète',
      },
    },
    collezioni: {
      eyebrow: 'Structure Catalogue',
      heading: 'Collections',
      lead: 'Architecture modulaire connectée à l’archive produits.',
      categoriesTitle: 'Filtrer par catégorie',
      allCategoriesLabel: 'Toutes les catégories',
      categoryNames: {
        caftani: 'Caftans marocains',
        'abbigliamento-donna': 'Prêt-à-porter féminin',
        cerimonia: 'Cérémonie',
      },
      emptyCatalogTitle: 'Catalogue en attente de photographies réelles',
      emptyCatalogDescription:
        'Aucun produit ou tarif fictif ajouté en Phase 1. Le schéma de données est prêt.',
      schemaReadyLabel: 'Schéma de données produit actif',
    },
    servizi: {
      eyebrow: 'Atelier et Location',
      heading: 'Services',
      lead: 'Sections prévues en attente de confirmation opérationnelle.',
      services: {
        'noleggio-caftani': {
          title: 'Location de caftans',
          description: 'Conditions, tarifs et modalités à confirmer avant publication.',
          statusLabel: 'En attente de confirmation',
        },
        'riparazioni-sartoriali': {
          title: 'Retouches et couture',
          description: 'Types d’interventions et devis à confirmer avant publication.',
          statusLabel: 'En attente de confirmation',
        },
      },
      ctaLabel: 'Demander des informations',
    },
    chiSiamo: {
      eyebrow: 'Identité',
      heading: 'À propos',
      lead: 'Page prévue pour l’histoire officielle de Maison Karima à Borgosesia.',
      plannedBlocks: [
        {
          title: '01. Histoire de la boutique',
          requirement: 'Texte approuvé à fournir avant mise en ligne.',
        },
        {
          title: '02. Savoir-faire et tissus',
          requirement: 'Présentation des matières et broderies.',
        },
        {
          title: '03. Galerie boutique',
          requirement: 'Photographies réelles autorisées.',
        },
      ],
    },
    contatti: {
      eyebrow: 'Coordonnées vérifiées',
      heading: 'Contact et Accès',
      lead: 'Adresse, horaires, accessibilité et moyens de paiement vérifiés.',
      emailPending: 'E-mail public : en attente de confirmation.',
      formSlotTitle: 'Formulaire de contact (emplacement prévu)',
      formSlotDescription: 'Formulaire protégé anti-spam activé lors des prochaines phases.',
    },
    notFound: {
      heading: 'Page introuvable',
      description: 'L’adresse demandée ne correspond à aucune page.',
      backHomeLabel: 'Retour à l’accueil',
    },
  },
};
