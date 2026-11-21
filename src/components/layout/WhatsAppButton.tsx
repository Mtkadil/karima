import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { useRouter } from '../../context/RouterContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
  productName?: string;
}

export function WhatsAppButton({ productName }: WhatsAppButtonProps) {
  const { t } = useRouter();

  if (!BUSINESS_INFO.contacts.whatsapp.confirmed) {
    return null;
  }

  const href = buildWhatsAppUrl({
    phone: BUSINESS_INFO.contacts.whatsapp.number,
    message: t.whatsapp.generalMessage,
    productPrefix: t.whatsapp.productMessagePrefix,
    productName,
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatingLabel}
      title={t.whatsapp.floatingLabel}
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 items-center gap-2 border border-oro/60 bg-bordeaux px-4 text-sm font-medium text-avorio shadow-md transition-transform duration-150 hover:bg-[#491624] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">{t.whatsapp.floatingLabel}</span>
    </a>
  );
}
