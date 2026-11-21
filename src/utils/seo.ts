import type { BusinessInfo } from '../types/business';

export interface ClothingStoreJsonLd {
  '@context': 'https://schema.org';
  '@type': 'ClothingStore';
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: string;
  sameAs: string[];
  aggregateRating: {
    '@type': 'AggregateRating';
    ratingValue: string;
    reviewCount: string;
  };
}

export function buildClothingStoreJsonLd(business: BusinessInfo): ClothingStoreJsonLd {
  const sameAs = [
    business.contacts.social.instagram.url,
    business.address.googleMapsUrl,
    ...(business.contacts.social.facebook.url
      ? [business.contacts.social.facebook.url]
      : []),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: business.brandName,
    description: business.category,
    url: business.websiteUrl,
    telephone: business.contacts.phone.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: 'IT',
    },
    openingHours: business.openingHoursSchema,
    sameAs,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.googleReputation.ratingValue.toFixed(1),
      reviewCount: String(business.googleReputation.reviewCount),
    },
  };
}
