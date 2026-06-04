import { useCallback, useEffect, useState } from 'react';
import { GALLERY, type GalleryItem } from '../data/gallery';

export default function Gallery(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length));
  }, []);
  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [activeIndex, close, next, prev]);

  const active: GalleryItem | null = activeIndex !== null ? GALLERY[activeIndex] ?? null : null;

  return (
    <section id="momentos" className="section section-gallery">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Momentos que ficam pra vida</span>
          <h2 className="section-title centered">Histórias que tive a honra de acompanhar</h2>
          <p className="section-sub">
            Cada foto carrega uma família, um nascimento, uma memória.
            Um pouquinho da emoção que vivemos juntas no momento mais especial.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className="gallery-item"
              onClick={() => setActiveIndex(i)}
              aria-label={`Abrir ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-overlay" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Fechar">
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próximo"
          >
            ›
          </button>
          <span className="lightbox-counter">
            {(activeIndex ?? 0) + 1} / {GALLERY.length}
          </span>
        </div>
      )}
    </section>
  );
}
