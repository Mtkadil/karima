export function sanitizeWhatsAppPhone(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export interface WhatsAppUrlOptions {
  phone: string;
  message: string;
  productName?: string;
  productPrefix?: string;
}

export function buildWhatsAppUrl({
  phone,
  message,
  productName,
  productPrefix = '',
}: WhatsAppUrlOptions): string {
  const cleanDigits = sanitizeWhatsAppPhone(phone);
  const finalMessage = productName
    ? `${productPrefix}${productName}`.trim()
    : message.trim();

  const params = new URLSearchParams({ text: finalMessage });
  return `https://wa.me/${cleanDigits}?${params.toString()}`;
}
