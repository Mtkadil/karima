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
        description:
          'Caftans marocains, prêt-à-porter féminin et tenues de cérémonie de la boutique Maison Karima à Borgosesia.',
      },
      servizi: {
        title: 'Services Couture et Location — Maison Karima',
        description:
          'Location de caftans et retouches couture chez Maison Karima à Borgosesia : conditions et disponibilités en attente de confirmation par la direction.',
      },
      'chi-siamo': {
        title: 'À propos — Maison Karima',
        description:
          'Identité, univers esthétique et adresse de la boutique Maison Karima à Borgosesia : prêt-à-porter féminin et caftans marocains.',
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
      eyebrow: 'Les Lignes de la Boutique',
      heading: 'Collections',
      lead: 'Une sélection dédiée aux caftans marocains, au prêt-à-porter féminin et aux tenues de cérémonie. Des pièces choisies pour la justesse des coupes, les matières et le soin du détail à Borgosesia.',
      categoriesTitle: 'Filtrer par catégorie',
      allCategoriesLabel: 'Toutes',
      categoryNames: {
        caftani: 'Caftans marocains',
        'abbigliamento-donna': 'Prêt-à-porter féminin',
        cerimonia: 'Cérémonie',
      },
      allCategoriesOverview: {
        eyebrow: 'Vue d’ensemble',
        title: 'Toutes les lignes Maison Karima',
        description:
          'Caftans de tradition marocaine, prêt-à-porter féminin du quotidien et créations pensées pour les grands événements.',
      },
      categoryDetails: {
        caftani: {
          eyebrow: 'Tradition Marocaine',
          description:
            'Caftans marocains sélectionnés pour allier savoir-faire traditionnel, élégance des lignes et allure contemporaine.',
        },
        'abbigliamento-donna': {
          eyebrow: 'Collection Femme',
          description:
            'Pièces de prêt-à-porter féminin pensées pour le vestiaire quotidien et différentes envies de style.',
        },
        cerimonia: {
          eyebrow: 'Occasions Spéciales',
          description:
            'Propositions dédiées aux célébrations et événements particuliers, accompagnées d’un conseil attentif en boutique.',
        },
      },
      emptyCatalogTitle: 'Catalogue en préparation',
      emptyCatalogDescription:
        'Les photographies et fiches détaillées des modèles seront publiées prochainement.',
      emptyState: {
        eyebrow: 'Sélection en boutique',
        title: 'Découvrir les pièces disponibles directement en boutique',
        categoryTitlePrefix: 'Pièces disponibles en boutique ·',
        description:
          'Le catalogue photographique en ligne est en cours de préparation. Pour connaître les modèles actuellement disponibles et les tailles en magasin, contactez-nous ou rendez-nous visite Viale Carlo Fassò 28 à Borgosesia.',
        primaryCta: 'Contacter la boutique',
        secondaryCta: 'Appeler +39 329 921 6661',
        resetFilterLabel: 'Voir toutes les catégories',
      },
      linesSection: {
        eyebrow: 'Explorer par ligne',
        title: 'Les trois univers de la boutique',
        selectLabel: 'Filtrer cette ligne',
        selectedLabel: 'Catégorie active',
      },
      productCard: {
        availabilityLabels: {
          vendita: 'Vente',
          noleggio: 'Location',
          'su-misura': 'Sur mesure',
        },
        priceOnRequestLabel: 'Prix sur demande',
        inquiryLabel: 'Demander des informations',
        photoPendingTitle: 'Photographie à venir',
        photoPendingDescription: 'Visuel du modèle bientôt disponible.',
        singleItemLabel: '1 pièce disponible',
        pluralItemsLabel: 'pièces disponibles',
      },
    },
    servizi: {
      eyebrow: 'Atelier et Couture',
      heading: 'Services',
      lead: 'Aux côtés de ses collections de prêt-à-porter féminin et de caftans marocains, Maison Karima évoque la location de caftans et le soin couture. Chaque modalité pratique est publiée uniquement après validation directe par la direction.',
      heroNote:
        'Les deux services présentés ci-dessous figurent dans les références officielles de la boutique, mais leurs modalités restent en attente de confirmation.',
      overviewTitle: 'Statut des services',
      overviewNote:
        'Aucun tarif, délai ou condition n’est affiché avant confirmation officielle.',
      pendingBadgeLabel: 'À confirmer avec la direction',
      confirmedBadgeLabel: 'Service confirmé',
      pendingDetailsHeading: 'Éléments en attente de confirmation',
      sourceReferenceLabel: 'Référence identifiée',
      services: {
        'noleggio-caftani': {
          eyebrow: 'Service 01 · Caftans',
          title: 'Location de caftans',
          description:
            'Le service de location de caftans est mentionné dans l’accroche du site existant de Maison Karima. Afin de garantir des informations exactes et transparentes, les conditions effectives restent en cours de confirmation avec la direction.',
          statusLabel: 'En attente de confirmation',
          sourceLabel: 'Accroche du site existant maisonkarima.com',
          pendingItems: [
            'Disponibilité effective des pièces proposées à la location',
            'Tarifs, dépôt de garantie éventuel et durée de location',
            'Conditions d’essayage, de remise et de demande en boutique',
          ],
          atelierQuote: 'Tradition marocaine · Soin du détail',
        },
        'riparazioni-sartoriali': {
          eyebrow: 'Service 02 · Couture',
          title: 'Retouches et couture',
          description:
            'La dimension couture et les retouches apparaissent dans l’accroche du site existant ainsi que sur le profil Instagram de la boutique. Les interventions proposées et leurs conditions restent à confirmer officiellement.',
          statusLabel: 'En attente de confirmation',
          sourceLabel: 'Accroche maisonkarima.com et profil @maison_karima_sartoria_kaftan',
          pendingItems: [
            'Types d’interventions et de retouches effectivement disponibles',
            'Modalités d’évaluation de la pièce et de devis en boutique',
            'Conditions pratiques et délais convenus sur place',
          ],
          atelierQuote: 'Précision couture · Respect de la matière',
        },
      },
      contactCtaSection: {
        eyebrow: 'Renseignements Directs',
        title: 'Vérifier la disponibilité directement auprès de la boutique',
        description:
          'Pour vérifier si la location de caftans ou l’accompagnement couture sont disponibles selon vos besoins et convenir d’une visite Viale Carlo Fassò 28 à Borgosesia, contactez-nous via la page Contact ou par téléphone.',
        primaryCta: 'Accéder à la page Contact',
        secondaryCta: 'Appeler +39 329 921 6661',
      },
      ctaLabel: 'Demander des informations',
    },
    chiSiamo: {
      eyebrow: 'La Boutique · Borgosesia',
      heading: 'À propos',
      lead: 'Maison Karima est une boutique de prêt-à-porter féminin et de caftans marocains située à Borgosesia, pensée pour accueillir chaque cliente dans un cadre soigné, chaleureux et attentif aux détails.',
      heroHighlight: 'Viale Carlo Fassò, 28 · Borgosesia (VC)',
      identity: {
        eyebrow: 'Identité Maison Karima',
        title: 'Rencontre entre tradition marocaine et style contemporain',
        body: 'La boutique s’articule autour d’une double vocation : proposer du prêt-à-porter féminin à l’allure actuelle tout en mettant en valeur l’univers du caftan marocain. Un équilibre guidé par la justesse des lignes, le soin des finitions et la recherche du tombé le plus adapté.',
        storySlotLabel: 'Histoire officielle à venir',
        storySlotNote:
          'Cet espace éditorial est conçu pour accueillir le récit officiel de la boutique et de son parcours dès sa validation par la direction.',
        pillars: [
          {
            label: '01 · Sélection',
            title: 'Prêt-à-porter féminin et caftans',
            description:
              'Des propositions pensées aussi bien pour le quotidien que pour les moments d’exception.',
          },
          {
            label: '02 · Harmonie',
            title: 'Soin des lignes et tombé',
            description:
              'Une attention constante portée aux proportions, à l’allure et au confort de chaque pièce.',
          },
          {
            label: '03 · Accueil',
            title: 'Écoute et conseil en boutique',
            description:
              'Un accueil attentif et discret pour accompagner chaque visiteuse dans son choix.',
          },
        ],
      },
      tradition: {
        eyebrow: 'Tradition et Détails',
        title: 'L’univers esthétique du caftan marocain',
        body: 'Dans la tradition vestimentaire marocaine, le caftan incarne une élégance féminine intemporelle, reconnaissable à la noblesse visuelle des étoffes, à la finesse des broderies et à l’harmonie des ornements. Maison Karima célèbre cet héritage esthétique avec un regard contemporain.',
        aestheticPoints: [
          {
            title: 'Étoffes et tombé',
            description:
              'Des matières choisies dans l’esprit du caftan pour souligner la fluidité, l’éclat et l’allure.',
          },
          {
            title: 'Broderies et ornements',
            description:
              'Des motifs et finitions décoratives inspirés du patrimoine esthétique marocain, tout en retenue.',
          },
          {
            title: 'Équilibre contemporain',
            description:
              'Un dialogue constant entre inspiration traditionnelle et recherche actuelle d’élégance.',
          },
        ],
        ornamentCaption: 'Élégance marocaine · Regard contemporain',
        ornamentSubcaption: 'Maison Karima · Borgosesia',
      },
      territory: {
        eyebrow: 'Ancrage Local',
        title: 'La boutique à Borgosesia',
        body: 'Située Viale Carlo Fassò, 28, Maison Karima accueille les clientes à Borgosesia et dans la Valsesia pour découvrir de près les couleurs, les matières et les pièces de prêt-à-porter féminin et de caftans marocains.',
        addressLabel: 'Adresse vérifiée',
        welcomeNoteLabel: 'Visite en boutique',
        welcomeNote:
          'Espace accueillant avec parking accessible en fauteuil roulant et possibilité de visites rapides.',
        ctaLabel: 'Accès et contact',
      },
      gallery: {
        eyebrow: 'Atmosphère et Espaces',
        title: 'Galerie de la boutique',
        lead: 'Cet espace est prêt à accueillir les photographies officielles de la boutique, des vitrines et de l’ambiance intérieure dès leur validation par la direction.',
        badgeText: 'Photographie officielle à venir',
        slots: [
          {
            title: 'Façade et vitrine',
            description:
              'Emplacement réservé à la photographie extérieure de la boutique Viale Carlo Fassò, 28 à Borgosesia.',
          },
          {
            title: 'Espace intérieur',
            description:
              'Emplacement réservé aux vues réelles de la boutique et de l’espace dédié à l’accueil.',
          },
          {
            title: 'Détails et lignes',
            description:
              'Emplacement réservé aux clichés autorisés des caftans marocains et du prêt-à-porter féminin.',
          },
        ],
      },
      finalCta: {
        eyebrow: 'Poursuivre la visite',
        title: 'Découvrir les collections ou nous rendre visite en boutique',
        description:
          'Parcourez les lignes présentées dans la rubrique Collections ou contactez-nous pour connaître les pièces disponibles à Borgosesia.',
        collectionsCta: 'Découvrir les collections',
        contactsCta: 'Contacter la boutique',
      },
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
