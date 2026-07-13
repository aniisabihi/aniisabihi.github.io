import { useEffect, useRef } from "react";
import { SITE } from "../config/site";
import { useUi } from "../context/UiContext";

export default function CvOverlay() {
  const { cvOpen, closeCv } = useUi();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cvOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCv();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeCv, cvOpen]);

  if (!cvOpen) {
    return null;
  }

  return (
    <div
      className="cv-overlay"
      role="presentation"
      onClick={closeCv}
    >
      <div
        className="cv-overlay__dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Resume"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cv-overlay__toolbar">
          <a
            className="cv-overlay__action"
            href={SITE.resumePath}
            download
          >
            Download
          </a>
          <a
            className="cv-overlay__action"
            href={SITE.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            className="cv-overlay__close"
            onClick={closeCv}
            aria-label="Close resume"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>

        <div className="cv-overlay__viewer">
          <iframe
            className="cv-overlay__frame"
            src={SITE.resumePath}
            title="Aniisa Bihi resume"
          />
          <p className="cv-overlay__fallback">
            PDF preview not available?{" "}
            <a href={SITE.resumePath} download>
              Download the resume
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
