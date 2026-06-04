import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT, whatsappUrl } from '../data/contact';

const PHOTO_CANDIDATES: readonly string[] = [
  '/assets/adriana.jpg',
  '/assets/adriana.jpeg',
  '/assets/adriana.png',
  '/assets/adriana.webp',
];

interface Badge {
  readonly value: string;
  readonly label: string;
}

const BADGES: readonly Badge[] = [
  { value: '25+', label: 'anos de experiência' },
  { value: '15mil+', label: 'partos acompanhados' },
  { value: '24h', label: 'plantão dedicado' },
];

export default function Hero(): JSX.Element {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoFailed = photoIndex >= PHOTO_CANDIDATES.length;
  const link = whatsappUrl(
    CONTACT.phone,
    'Olá Adriana, gostaria de agendar uma reunião online.',
  );

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-decor" />
      <div className="hero-container">
        <div className="hero-text">
          <span className="eyebrow">+ de 25 anos cuidando da sua história</span>
          <h1>
            Acolher, cuidar e <em>celebrar</em> a chegada do seu bebê.
          </h1>
          <div className="hero-tagline">
            <span className="hero-tagline-dot" />
            Enfermeira Obstetra <strong>referência em BH e região</strong>
          </div>
          <p className="hero-sub">
            Sou <strong>Adriana Roberto</strong>, enfermeira obstetra e especialista em saúde da família,
            dedicada ao parto humanizado e ao cuidado integral da mulher em Contagem/MG.
          </p>
          <div className="hero-cta">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Conhecer serviços
            </a>
          </div>
          <ul className="hero-badges">
            {BADGES.map((b) => (
              <li key={b.value}>
                <span>{b.value}</span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-image">
          <div className={`image-frame${photoFailed ? ' no-image' : ''}`}>
            {!photoFailed && (
              <img
                key={photoIndex}
                src={PHOTO_CANDIDATES[photoIndex]}
                alt="Adriana Roberto — Enfermeira Obstetra"
                onError={() => setPhotoIndex((i) => i + 1)}
              />
            )}
            <div className="image-placeholder">
              <span>📷</span>
              <p>
                Salve a foto da Adriana em
                <br />
                <code>public/assets/adriana.jpg</code>
              </p>
            </div>
          </div>
          <div className="image-decor image-decor-1" />
          <div className="image-decor image-decor-2" />
        </div>
      </div>
    </section>
  );
}
