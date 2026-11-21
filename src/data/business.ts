import type { BusinessInfo } from '../types/business';

/**
 * Dati aziendali verificati dal documento:
 * maison_karima_brief_web_developer_v1.1.json
 * I campi non ancora confermati o assenti dal brief restano esplicitamente null / pending.
 */
export const BUSINESS_INFO: BusinessInfo = {
  brandName: 'MAISON KARIMA',
  category: 'Negozio di abbigliamento femminile e caftani marocchini',
  websiteUrl: 'https://maisonkarima.com/',
  claimSource: 'Caftani di lusso e abbigliamento donna – brand, vendita, noleggio e riparazioni',
  address: {
    street: 'Viale Carlo Fassò, 28',
    postalCode: '13011',
    city: 'Borgosesia',
    province: 'VC',
    region: 'Piemonte',
    country: 'Italia',
    verifiedStatus: 'Verificato su scheda Google Business Profile',
    googleMapsUrl: 'https://maps.app.goo.gl/9mUhdiR95CX1n32T9',
    googlePlaceId: 'ChIJ7T2KCAARhkcRfYtBmLU_WpA',
  },
  contacts: {
    phone: {
      display: '+39 329 921 6661',
      href: 'tel:+393299216661',
      verified: true,
    },
    whatsapp: {
      number: '+393299216661',
      confirmed: false,
      note: 'Da confermare con la titolare l’abilitazione WhatsApp Business e l’autorizzazione al collegamento diretto',
    },
    email: {
      value: null,
      note: 'Non presente pubblicamente su Google Maps né sul sito attuale; da richiedere alla titolare',
    },
    social: {
      instagram: {
        handle: '@maison_karima_sartoria_kaftan',
        url: 'https://www.instagram.com/maison_karima_sartoria_kaftan',
        publiclyInspectable: false,
      },
      facebook: {
        url: null,
      },
    },
  },
  openingHours: {
    lunedi: ['09:00-12:00', '15:30-19:00'],
    martedi: ['09:00-12:00', '15:30-19:00'],
    mercoledi: ['09:00-12:00', '15:30-19:00'],
    giovedi: ['09:00-12:00', '15:30-19:00'],
    venerdi: ['09:00-12:00', '15:30-19:00'],
    sabato: ['09:00-12:00', '15:30-19:00'],
    domenica: ['09:00-12:00', '15:30-19:00'],
  },
  openingHoursSchema: 'Mo-Su 09:00-12:00, 15:30-19:00',
  accessibilityAndPayments: {
    parking: 'Parcheggio accessibile in sedia a rotelle',
    visitExperience: 'Possibilità di visite rapide',
    paymentMethods: [
      'Carte di credito',
      'Carte di debito',
      'Pagamenti mobili NFC',
    ],
  },
  googleReputation: {
    ratingValue: 5.0,
    reviewCount: 6,
    source: 'Google Business Profile',
  },
  legal: {
    ragioneSociale: null,
    partitaIva: null,
    sedeLegale: null,
    pendingNotice:
      'Dati societari obbligatori (Ragione Sociale, P.IVA, Sede Legale, Email) in attesa di conferma dalla titolare.',
  },
  officialLogoUrl: null,
};
