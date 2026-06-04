export interface ContactInfo {
  readonly name: string;
  readonly title: string;
  readonly city: string;
  readonly phone: string;
  readonly phoneDisplay: string;
}

export const CONTACT: ContactInfo = {
  name: 'Adriana Roberto',
  title: 'Enfermeira Obstetra',
  city: 'Contagem — MG',
  phone: '5531988552903',
  phoneDisplay: '(31) 98855-2903',
};

export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
