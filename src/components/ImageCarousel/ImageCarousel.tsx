import { KeyboardEvent, useEffect, useState } from "react";
import type { PostImage } from "../../types/post";
import styles from "./ImageCarousel.module.scss";

type ImageCarouselProps = {
  images: PostImage[];
  /** Names the carousel for assistive tech, e.g. the project name. */
  label?: string;
  intervalMs?: number;
};

export default function ImageCarousel({
  images,
  label,
  intervalMs = 5000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  // `playing` is the user's choice (the pause button, or any manual step);
  // `holding` is a temporary pause while the pointer or focus is inside.
  const [playing, setPlaying] = useState(() => {
    return !(
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });
  const [holding, setHolding] = useState(false);
  const hasMultiple = images.length > 1;
  const rotating = hasMultiple && playing && !holding;

  useEffect(() => {
    if (!rotating) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [rotating, images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  // Any manual step means the reader has taken over — stop auto-advancing.
  const step = (index: number) => {
    setPlaying(false);
    setActiveIndex((index + images.length) % images.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultiple) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(activeIndex + 1);
    }
  };

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div
      className={styles.root}
      role="region"
      aria-roledescription="carousel"
      aria-label={label ? `${label} images` : "Project images"}
      onKeyDown={handleKeyDown}
      onFocus={() => setHolding(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setHolding(false);
        }
      }}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
    >
      <div className={styles.viewport} aria-live={rotating ? "off" : "polite"}>
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          decoding="async"
          className={
            activeImage.variant === "height"
              ? styles.imageHeight
              : styles.imageWidth
          }
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              className={styles.controlPrev}
              onClick={() => step(activeIndex - 1)}
              aria-label="Previous image"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.controlNext}
              onClick={() => step(activeIndex + 1)}
              aria-label="Next image"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className={styles.bar}>
          <button
            type="button"
            className={styles.playToggle}
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            <i
              className={`fa ${playing ? "fa-pause" : "fa-play"}`}
              aria-hidden="true"
            />
          </button>

          <div className={styles.dots} role="group" aria-label="Choose image">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-current={index === activeIndex ? "true" : undefined}
                className={
                  index === activeIndex
                    ? `${styles.dot} ${styles.active}`
                    : styles.dot
                }
                onClick={() => step(index)}
                aria-label={`Show image ${index + 1} of ${images.length}`}
              />
            ))}
          </div>

          <p className={styles.counter} aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
}
