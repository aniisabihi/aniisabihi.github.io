import { KeyboardEvent, useEffect, useState } from "react";
import type { PostImage } from "../types/post";

type ImageCarouselProps = {
  images: PostImage[];
  intervalMs?: number;
};

export default function ImageCarousel({
  images,
  intervalMs = 4000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const hasMultiple = images.length > 1;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!hasMultiple || !autoplay || prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [hasMultiple, autoplay, prefersReducedMotion, images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  const goTo = (index: number) => setActiveIndex(index);
  const goPrev = () =>
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((index) => (index + 1) % images.length);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultiple) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const activeImage = images[activeIndex];

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project images"
      tabIndex={hasMultiple ? 0 : -1}
      onKeyDown={handleKeyDown}
      onFocus={() => setAutoplay(false)}
      onBlur={() => setAutoplay(true)}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="carousel__viewport">
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className={
            activeImage.variant === "height"
              ? "carousel__image carousel__image--height"
              : "carousel__image carousel__image--width"
          }
        />
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            className="carousel__control carousel__control--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__control carousel__control--next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
          <div
            className="carousel__dots"
            role="tablist"
            aria-label="Image slides"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={
                  index === activeIndex
                    ? "carousel__dot is-active"
                    : "carousel__dot"
                }
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1} of ${images.length}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
