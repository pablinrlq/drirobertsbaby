import WhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl } from '../data/contact';

interface FloatingWhatsAppProps {
  readonly phone: string;
  readonly message?: string;
}

export default function FloatingWhatsApp({
  phone,
  message = 'Olá Adriana, gostaria de mais informações.',
}: FloatingWhatsAppProps): JSX.Element {
  return (
    <a
      href={whatsappUrl(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}
