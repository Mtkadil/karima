import test from 'node:test';
import assert from 'node:assert/strict';
import { getDictionary } from '../data/i18n';
import {
  DESIGN_SYSTEM_PREVIEW_PATH,
  getNavigationItems,
  getRoutePath,
  normalizePathname,
  resolvePath,
} from './routing';

test('normalizePathname strips trailing slashes and query strings', () => {
  assert.equal(normalizePathname('/'), '/');
  assert.equal(normalizePathname('/collezioni/'), '/collezioni');
  assert.equal(normalizePathname('/contatti?ref=ig'), '/contatti');
});

test('resolvePath resolves Italian primary routes and unknown paths', () => {
  assert.deepEqual(resolvePath('/'), {
    locale: 'it',
    routeId: 'home',
    isDesignSystemPreview: false,
    normalizedPath: '/',
  });
  assert.deepEqual(resolvePath('/collezioni'), {
    locale: 'it',
    routeId: 'collezioni',
    isDesignSystemPreview: false,
    normalizedPath: '/collezioni',
  });
  assert.deepEqual(resolvePath('/chi-siamo/'), {
    locale: 'it',
    routeId: 'chi-siamo',
    isDesignSystemPreview: false,
    normalizedPath: '/chi-siamo',
  });
  assert.deepEqual(resolvePath('/inesistente'), {
    locale: 'it',
    routeId: null,
    isDesignSystemPreview: false,
    normalizedPath: '/inesistente',
  });
});

test('resolvePath resolves temporary design system preview route', () => {
  assert.deepEqual(resolvePath(DESIGN_SYSTEM_PREVIEW_PATH), {
    locale: 'it',
    routeId: null,
    isDesignSystemPreview: true,
    normalizedPath: '/design-system',
  });
});

test('resolvePath supports prepared French routes', () => {
  assert.deepEqual(resolvePath('/fr'), {
    locale: 'fr',
    routeId: 'home',
    isDesignSystemPreview: false,
    normalizedPath: '/fr',
  });
  assert.deepEqual(resolvePath('/fr/collections'), {
    locale: 'fr',
    routeId: 'collezioni',
    isDesignSystemPreview: false,
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
