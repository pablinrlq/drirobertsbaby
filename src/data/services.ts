export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export const SERVICES: readonly Service[] = [
  {
    icon: '🤱',
    title: 'Parto Particular Humanizado',
    description:
      'Acompanhamento integral do trabalho de parto, com presença contínua, respeito ao plano de parto e atendimento individualizado.',
  },
  {
    icon: '🌿',
    title: 'Indução ao Parto',
    description:
      'Métodos naturais e seguros para estimular o trabalho de parto, sempre baseados em evidência e em conjunto com sua equipe médica.',
  },
  {
    icon: '💆‍♀️',
    title: 'Massagens Perineais e Relaxantes',
    description:
      'Técnicas que aliviam o desconforto da gestação, preparam o períneo e promovem bem-estar físico e emocional.',
  },
  {
    icon: '🤰',
    title: 'Pré-Natal Humanizado',
    description:
      'Consultas de enfermagem obstétrica que acolhem suas dúvidas, anseios e celebram cada fase da gestação.',
  },
  {
    icon: '🍼',
    title: 'Apoio ao Pós-Parto e Amamentação',
    description:
      'Suporte presencial e remoto nos primeiros dias do puerpério, com orientação sobre amamentação e cuidados com o recém-nascido.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Saúde da Família',
    description:
      'Atendimento integral à saúde da mulher e da família, com olhar preventivo e cuidado de longo prazo.',
  },
];
