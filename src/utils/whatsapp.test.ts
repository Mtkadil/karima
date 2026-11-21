import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppUrl, sanitizeWhatsAppPhone } from './whatsapp';

test('sanitizeWhatsAppPhone strips spaces and plus symbol', () => {
  assert.equal(sanitizeWhatsAppPhone('+39 329 921 6661'), '393299216661');
});

test('buildWhatsAppUrl encodes general message and product inquiry', () => {
  const general = buildWhatsAppUrl({
    phone: '+39 329 921 6661',
    message: 'Buongiorno Maison Karima',
  });
  assert.equal(general, 'https://wa.me/393299216661?text=Buongiorno+Maison+Karima');

  const product = buildWhatsAppUrl({
    phone: '+39 329 921 6661',
    message: 'Fallback',
    productPrefix: 'Richiesta articolo: ',
    productName: 'Caftano Seta Bordeaux',
  });
  assert.equal(
    product,
    'https://wa.me/393299216661?text=Richiesta+articolo%3A+Caftano+Seta+Bordeaux'
  );
});
