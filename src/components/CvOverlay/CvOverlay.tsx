import { useEffect, useRef } from "react";
import { SITE } from "../../config/site";
import { useUi } from "../../context/UiContext";
import styles from "./CvOverlay.module.scss";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export default function CvOverlay() {
  const { cvOpen, closeCv } = useUi();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const getFocusable = () => {
      const dialog = dialogRef.current;
      if (!dialog) {
        return [];
      }

      return Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.width > 0 || rect.height > 0;
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCv();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      const focusable = getFocusable();

      if (!dialog || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && dialog.contains(active);

      // aria-modal hides the rest of the page from assistive tech, so keyboard
      // focus has to stay inside the dialog to match.
      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (!inside || active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      // Send focus back where it came from rather than dropping it to <body>.
      previouslyFocused?.focus?.();
    };
  }, [closeCv, cvOpen]);

  if (!cvOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} role="presentation" onClick={closeCv}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Resume"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.toolbar}>
          <a className={styles.action} href={SITE.resumePath} download>
            Download
          </a>
          <a
            className={styles.action}
            href={SITE.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            onClick={closeCv}
            aria-label="Close resume"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.viewer}>
          <iframe
            className={styles.frame}
            src={SITE.resumePath}
            title="Aniisa Bihi resume"
          />
          <p className={styles.fallback}>
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
