import test from 'node:test';
import assert from 'node:assert/strict';
import { SERVICES_ARCHIVE } from '../data/services';
import {
  countPendingServices,
  findServiceDefinition,
  isServicePendingConfirmation,
} from './services';

test('SERVICES_ARCHIVE strictly contains the two brief-documented services in pending_confirmation state', () => {
  assert.equal(SERVICES_ARCHIVE.length, 2);

  const rental = findServiceDefinition(SERVICES_ARCHIVE, 'noleggio-caftani');
  const tailoring = findServiceDefinition(SERVICES_ARCHIVE, 'riparazioni-sartoriali');

  assert.ok(rental);
  assert.ok(tailoring);
  assert.equal(rental.status, 'pending_confirmation');
  assert.equal(tailoring.status, 'pending_confirmation');
  assert.equal(isServicePendingConfirmation(rental), true);
  assert.equal(isServicePendingConfirmation(tailoring), true);
  assert.equal(countPendingServices(SERVICES_ARCHIVE), 2);
});

test('isServicePendingConfirmation safely distinguishes confirmed vs pending or missing services', () => {
  assert.equal(isServicePendingConfirmation({ status: 'confirmed' }), false);
  assert.equal(isServicePendingConfirmation({ status: 'pending_confirmation' }), true);
  assert.equal(isServicePendingConfirmation(null), false);
  assert.equal(isServicePendingConfirmation(undefined), false);
});
