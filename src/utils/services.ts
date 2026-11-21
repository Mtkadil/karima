import type { ServiceDefinition } from '../types/catalog';

export type ServiceId = ServiceDefinition['id'];

export function findServiceDefinition(
  services: readonly ServiceDefinition[],
  id: ServiceId
): ServiceDefinition | null {
  return services.find((service) => service.id === id) ?? null;
}

export function isServicePendingConfirmation(
  service: Pick<ServiceDefinition, 'status'> | null | undefined
): boolean {
  return service?.status === 'pending_confirmation';
}

export function countPendingServices(
  services: readonly ServiceDefinition[]
): number {
  return services.filter((service) => service.status === 'pending_confirmation').length;
}
