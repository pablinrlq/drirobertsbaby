export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
}

const TOTAL_PHOTOS = 8;

export const GALLERY: readonly GalleryItem[] = Array.from(
  { length: TOTAL_PHOTOS },
  (_, i): GalleryItem => ({
    src: `/assets/gallery/momento-${i + 1}.jpg`,
    alt: `Momento especial acompanhado pela Adriana — foto ${i + 1}`,
  }),
);
