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
});
