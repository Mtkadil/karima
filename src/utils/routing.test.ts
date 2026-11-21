import test from 'node:test';
import assert from 'node:assert/strict';
import { getDictionary } from '../data/i18n';
import { getNavigationItems, getRoutePath, normalizePathname, resolvePath } from './routing';

test('normalizePathname strips trailing slashes and query strings', () => {
  assert.equal(normalizePathname('/'), '/');
  assert.equal(normalizePathname('/collezioni/'), '/collezioni');
  assert.equal(normalizePathname('/contatti?ref=ig'), '/contatti');
});

test('resolvePath resolves Italian primary routes and unknown paths', () => {
  assert.deepEqual(resolvePath('/'), {
    locale: 'it',
    routeId: 'home',
    normalizedPath: '/',
  });
  assert.deepEqual(resolvePath('/collezioni'), {
    locale: 'it',
    routeId: 'collezioni',
    normalizedPath: '/collezioni',
  });
  assert.deepEqual(resolvePath('/chi-siamo/'), {
    locale: 'it',
    routeId: 'chi-siamo',
    normalizedPath: '/chi-siamo',
  });
  assert.deepEqual(resolvePath('/inesistente'), {
    locale: 'it',
    routeId: null,
    normalizedPath: '/inesistente',
  });
});

test('resolvePath supports prepared French routes', () => {
  assert.deepEqual(resolvePath('/fr'), {
    locale: 'fr',
    routeId: 'home',
    normalizedPath: '/fr',
  });
  assert.deepEqual(resolvePath('/fr/collections'), {
    locale: 'fr',
    routeId: 'collezioni',
    normalizedPath: '/fr/collections',
  });
});

test('getNavigationItems returns all 5 required pages in order', () => {
  const itNav = getNavigationItems(getDictionary('it'), 'it');
  assert.equal(itNav.length, 5);
  assert.deepEqual(
    itNav.map((item) => item.id),
    ['home', 'collezioni', 'servizi', 'chi-siamo', 'contatti']
  );
  assert.equal(getRoutePath('servizi', 'fr'), '/fr/services');
});
