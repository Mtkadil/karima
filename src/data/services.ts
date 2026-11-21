import type { ServiceDefinition } from '../types/catalog';

/**
 * Servizi citati nel claim esistente di maisonkarima.com e nell'handle Instagram.
 * Restano in stato `pending_confirmation` fino a conferma operativa della titolare.
 */
export const SERVICES_ARCHIVE: readonly ServiceDefinition[] = [
  {
    id: 'noleggio-caftani',
    status: 'pending_confirmation',
    sourceNote: 'Indicato nel claim di maisonkarima.com; condizioni, tariffe, cauzione e durata da confermare.',
  },
  {
    id: 'riparazioni-sartoriali',
    status: 'pending_confirmation',
    sourceNote: 'Indicato nel claim di maisonkarima.com e @maison_karima_sartoria_kaftan; interventi e preventivi da confermare.',
  },
];
