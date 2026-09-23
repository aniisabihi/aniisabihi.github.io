import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, type ReactNode } from "react";
import { FORMSPREE_FORM_ID } from "../../config/forms";
import styles from "./ContactForm.module.scss";

type FieldName = "name" | "email" | "message";

export default function ContactForm() {
  const [state, handleSubmit] =
    useForm<Record<FieldName, string>>(FORMSPREE_FORM_ID);
  const successRef = useRef<HTMLDivElement>(null);

  // Sending removes the form — and the focused submit button with it. Put
  // focus on the confirmation so it is announced and focus is not lost.
  useEffect(() => {
    if (state.succeeded) {
      successRef.current?.focus();
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div
        ref={successRef}
        className={styles.success}
        role="status"
        tabIndex={-1}
      >
        <p className={styles.successTitle}>Thanks, message sent!</p>
        <p>I&apos;ll get back to you as soon as I can.</p>
      </div>
    );
  }

  // Wire each server-side error to its field so screen readers announce it
  // together with the label.
  const fieldProps = (field: FieldName) => {
    const hasError = (state.errors?.getFieldErrors(field).length ?? 0) > 0;
    return {
      id: `contact-${field}`,
      name: field,
      required: true,
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? `contact-${field}-error` : undefined,
    };
  };

  const field = (name: FieldName, label: string, control: ReactNode) => (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={`contact-${name}`}>
        {label}
      </label>
      {control}
      <ValidationError
        id={`contact-${name}-error`}
        prefix={label}
        field={name}
        errors={state.errors}
        className={styles.fieldError}
      />
    </div>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.note}>All fields are required.</p>
      <div className={styles.row}>
        {field(
          "name",
          "Name",
          <input
            {...fieldProps("name")}
            type="text"
            placeholder="Your name"
            autoComplete="name"
          />,
        )}
        {field(
          "email",
          "Email",
          <input
            {...fieldProps("email")}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
          />,
        )}
      </div>
      {field(
        "message",
        "Message",
        <textarea
          {...fieldProps("message")}
          rows={5}
          placeholder="Say hello, ask about a project…"
        />,
      )}

      <ValidationError
        errors={state.errors}
        className={styles.feedbackError}
        role="alert"
      />

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submit}
          disabled={state.submitting}
        >
          {state.submitting ? "Sending…" : "Send message"}
          {!state.submitting && (
            <i className="fa fa-arrow-right" aria-hidden="true" />
          )}
        </button>
      </div>
    </form>
  );
}
