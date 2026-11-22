import test from 'node:test';
import assert from 'node:assert/strict';
import { BUSINESS_INFO } from '../data/business';
import { buildClothingStoreJsonLd } from './seo';

test('buildClothingStoreJsonLd produces verified Schema.org ClothingStore without AggregateRating', () => {
  const schema = buildClothingStoreJsonLd(BUSINESS_INFO);
  assert.equal(schema['@type'], 'ClothingStore');
  assert.equal(schema.name, 'MAISON KARIMA');
  assert.equal(schema.address.streetAddress, 'Viale Carlo Fassò, 28');
  assert.equal(schema.address.postalCode, '13011');
  assert.equal(schema.address.addressLocality, 'Borgosesia');
  assert.equal(schema.telephone, '+39 329 921 6661');
  assert.equal(schema.openingHours, 'Mo-Su 09:00-12:00, 15:30-19:00');
  assert.equal('aggregateRating' in schema, false);
  assert.ok(schema.sameAs.includes(BUSINESS_INFO.contacts.social.instagram.url));
  assert.ok(schema.sameAs.includes(BUSINESS_INFO.address.googleMapsUrl));
});

test('BUSINESS_INFO keeps WhatsApp unconfirmed, no fabricated email, and 7-day opening hours', () => {
  assert.equal(BUSINESS_INFO.contacts.whatsapp.confirmed, false);
  assert.equal(BUSINESS_INFO.contacts.email.value, null);
  assert.equal(Object.keys(BUSINESS_INFO.openingHours).length, 7);
  for (const slots of Object.values(BUSINESS_INFO.openingHours)) {
    assert.deepEqual(slots, ['09:00-12:00', '15:30-19:00']);
  }
});
