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
      eyebrow: 'Borgosesia · Viale Carlo Fassò, 28',
      heading: 'Maison Karima',
      lead: 'Prêt-à-porter féminin et caftans marocains. Architecture préparée pour la version française.',
      primaryAction: 'Voir les Collections',
      secondaryAction: 'Nous trouver',
      sectionsTitle: 'Sections prévues pour l’accueil',
      plannedSections: [
        {
          title: '01. Section Hero et présentation',
          detail: 'Emplacement réservé aux photographies officielles de la boutique.',
        },
        {
          title: '02. Catégories principales',
          detail: 'Prêt-à-porter féminin, Caftans marocains et Cérémonie.',
        },
        {
          title: '03. Sélection mise en avant',
          detail: 'Connectée à l’archive produits séparée.',
        },
        {
          title: '04. Avis Google et localisation',
          detail: 'Note 5.0/5 (6 avis Google Business Profile) et horaires vérifiés.',
        },
      ],
      reputationLabel: 'Note vérifiée sur Google Business Profile',
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
