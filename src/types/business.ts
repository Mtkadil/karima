export type DayOfWeek =
  | 'lunedi'
  | 'martedi'
  | 'mercoledi'
  | 'giovedi'
  | 'venerdi'
  | 'sabato'
  | 'domenica';

export interface BusinessAddress {
  street: string;
  postalCode: string;
  city: string;
  province: string;
  region: string;
  country: string;
  verifiedStatus: string;
  googleMapsUrl: string;
  googlePlaceId: string;
}

export interface BusinessContacts {
  phone: {
    display: string;
    href: string;
    verified: boolean;
  };
  whatsapp: {
    number: string;
    confirmed: boolean;
    note: string;
  };
  email: {
    value: string | null;
    note: string;
  };
  social: {
    instagram: {
      handle: string;
      url: string;
      publiclyInspectable: boolean;
    };
    facebook: {
      url: string | null;
    };
  };
}

export interface LegalEntityInfo {
  ragioneSociale: string | null;
  partitaIva: string | null;
  sedeLegale: string | null;
  pendingNotice: string;
}

export interface BusinessInfo {
  brandName: string;
  category: string;
  websiteUrl: string;
  claimSource: string;
  address: BusinessAddress;
  contacts: BusinessContacts;
  openingHours: Record<DayOfWeek, readonly [string, string]>;
  openingHoursSchema: string;
  accessibilityAndPayments: {
    parking: string;
    visitExperience: string;
    paymentMethods: readonly string[];
  };
  googleReputation: {
    ratingValue: number;
    reviewCount: number;
    source: string;
  };
  legal: LegalEntityInfo;
  officialLogoUrl: string | null;
}
