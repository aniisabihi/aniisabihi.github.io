import { useEffect, useState } from "react";

export default function ImageCarousel({ images, intervalMs = 4000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [hasMultiple, images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  const goTo = (index) => setActiveIndex(index);
  const goPrev = () =>
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((index) => (index + 1) % images.length);

  const activeImage = images[activeIndex];

  return (
    <div className='carousel'>
      <div className='carousel__viewport'>
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
            type='button'
            className='carousel__control carousel__control--prev'
            onClick={goPrev}
            aria-label='Previous image'
          >
            ‹
          </button>
          <button
            type='button'
            className='carousel__control carousel__control--next'
            onClick={goNext}
            aria-label='Next image'
          >
            ›
          </button>
          <div className='carousel__dots'>
            {images.map((image, index) => (
              <button
                key={image.src}
                type='button'
                className={
                  index === activeIndex
                    ? "carousel__dot is-active"
                    : "carousel__dot"
                }
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
