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
        title: 'Contact et Accès — Maison Karima Borgosesia',
        description:
          'Rendez-nous visite Viale Carlo Fassò 28 à Borgosesia (VC) : téléphone +39 329 921 6661, horaires d’ouverture, accessibilité, moyens de paiement et itinéraire Google Maps.',
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
      lead: 'Maison Karima est une boutique de prêt-à-porter féminin et de caftans marocains à Borgosesia, un espace soigné dédié à l’élégance féminine.',
      heroHighlight: 'Viale Carlo Fassò, 28 · Borgosesia (VC)',
      identity: {
        eyebrow: 'Identité Maison Karima',
        title: 'Rencontre entre tradition marocaine et style contemporain',
        body: 'Maison Karima réunit des propositions de prêt-à-porter féminin et le charme intemporel du caftan marocain. Une identité dédiée à l’élégance, à l’harmonie des lignes et au soin de l’image.',
        storySlotLabel: 'Histoire officielle à approuver',
        storySlotNote:
          'Cet espace éditorial est prévu pour accueillir l’histoire officielle de la boutique dès qu’elle sera approuvée par la direction.',
        pillars: [
          {
            label: '01 · Offre',
            title: 'Prêt-à-porter féminin et caftans',
            description:
              'Une offre dédiée à celles qui recherchent l’élégance féminine et des pièces inspirées de la tradition marocaine.',
          },
          {
            label: '02 · Style',
            title: 'Équilibre entre tradition et modernité',
            description:
              'Un dialogue visuel entre l’esthétique classique du caftan et le goût contemporain.',
          },
          {
            label: '03 · Boutique',
            title: 'Accueil en magasin',
            description:
              'Un cadre réservé à Borgosesia pour découvrir de près les collections présentées en boutique.',
          },
        ],
      },
      tradition: {
        eyebrow: 'Tradition et Détails',
        title: 'L’univers esthétique du caftan marocain',
        body: 'Dans la culture vestimentaire du Maroc, le caftan est reconnu comme un symbole d’élégance féminine, expression d’une esthétique raffinée où étoffes, broderies et proportions s’accordent avec harmonie. Maison Karima s’inspire de cet univers en l’associant à une sensibilité contemporaine.',
        aestheticPoints: [
          {
            title: 'Étoffes et tradition',
            description:
              'Dans l’imaginaire du caftan marocain, la diversité des étoffes et le jeu des lignes dessinent une silhouette emblématique et féminine.',
          },
          {
            title: 'Broderies et détails',
            description:
              'Les motifs décoratifs et les broderies propres à la tradition marocaine évoquent un goût raffiné et intemporel.',
          },
          {
            title: 'Esprit contemporain',
            description:
              'La rencontre entre codes traditionnels et esthétique actuelle rend le caftan adapté aux sensibilités et envies modernes.',
          },
        ],
        ornamentCaption: 'Élégance marocaine · Sensibilité contemporaine',
        ornamentSubcaption: 'Maison Karima · Borgosesia',
      },
      territory: {
        eyebrow: 'Ancrage Local',
        title: 'La boutique à Borgosesia',
        body: 'Située Viale Carlo Fassò, 28, Maison Karima accueille les clientes à Borgosesia pour découvrir du prêt-à-porter féminin et des caftans marocains. La visite en magasin permet d’observer directement les propositions disponibles.',
        addressLabel: 'Adresse vérifiée',
        welcomeNoteLabel: 'Visite en boutique',
        welcomeNote:
          'Parking accessible en fauteuil roulant et possibilité de visites rapides.',
        ctaLabel: 'Accès et contact',
      },
      gallery: {
        eyebrow: 'Atmosphère et Espaces',
        title: 'Galerie de la boutique',
        lead: 'Cet espace est prévu pour accueillir les photographies officielles de la boutique dès qu’elles seront approuvées par la direction.',
        badgeText: 'Photographie officielle à venir',
        slots: [
          {
            title: 'Façade et vitrine',
            description:
              'Emplacement réservé à la photographie extérieure de la boutique Viale Carlo Fassò, 28 à Borgosesia.',
          },
          {
            title: 'Intérieur de la boutique',
            description:
              'Emplacement réservé aux images réelles et autorisées de l’espace intérieur du magasin.',
          },
          {
            title: 'Détails et collections',
            description:
              'Emplacement réservé aux clichés autorisés dédiés aux propositions de la boutique.',
          },
        ],
      },
      finalCta: {
        eyebrow: 'Poursuivre la visite',
        title: 'Découvrir les collections ou nous rendre visite en boutique',
        description:
          'Découvrez les lignes de la boutique dans la rubrique Collections ou contactez-nous pour obtenir des informations sur les propositions disponibles à Borgosesia.',
        collectionsCta: 'Découvrir les collections',
        contactsCta: 'Contacter la boutique',
      },
    },
    contatti: {
      eyebrow: 'Contact et Accès',
      heading: 'Nous rendre visite',
      lead: 'Nous vous accueillons à Borgosesia, Viale Carlo Fassò 28. Contactez-nous par téléphone ou ouvrez l’itinéraire pour rejoindre facilement la boutique.',
      heroPrimaryCta: 'Itinéraire',
      heroSecondaryCta: 'Appeler la boutique',
      contactCard: {
        eyebrow: 'Coordonnées Officielles',
        title: 'Informations de contact',
        addressLabel: 'Adresse',
        phoneLabel: 'Téléphone',
        instagramLabel: 'Instagram',
        mapsButtonLabel: 'Ouvrir dans Google Maps',
      },
      hoursCard: {
        eyebrow: 'Google Business Profile',
        title: 'Horaires d’ouverture',
        sourceBadge: 'Horaires relevés sur Google',
        note: 'Ces horaires sont relevés sur Google Business Profile et peuvent être soumis à des variations saisonnières ou lors des jours fériés.',
      },
      locationSection: {
        eyebrow: 'Où nous trouver',
        title: 'La boutique à Borgosesia',
        description:
          'Maison Karima est située Viale Carlo Fassò, 28 à Borgosesia (VC), dans le Piémont. Ouvrez directement l’itinéraire sur Google Maps pour vous rendre en boutique depuis votre appareil.',
        verifiedNote: 'Localisation vérifiée sur la fiche Google Business Profile',
        ctaLabel: 'Ouvrir l’itinéraire sur Google Maps',
      },
      accessibilitySection: {
        eyebrow: 'Accueil et Paiements',
        accessibilityTitle: 'Accessibilité et visite',
        accessibilityItems: [
          'Parking accessible en fauteuil roulant',
          'Possibilité de visites rapides',
        ],
        paymentsTitle: 'Moyens de paiement',
        paymentItems: [
          'Cartes de crédit',
          'Cartes de débit',
          'Paiements mobiles NFC',
        ],
      },
      instagramSection: {
        eyebrow: 'Profil Officiel',
        title: 'Suivre Maison Karima sur Instagram',
        description:
          'Suivez les collections et les nouveautés de la boutique sur le profil Instagram officiel @maison_karima_sartoria_kaftan.',
        ctaLabel: 'Voir @maison_karima_sartoria_kaftan',
      },
    },
    notFound: {
      heading: 'Page introuvable',
      description: 'L’adresse demandée ne correspond à aucune page.',
      backHomeLabel: 'Retour à l’accueil',
    },
  },
};
