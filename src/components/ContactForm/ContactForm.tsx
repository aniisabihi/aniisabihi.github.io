import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_FORM_ID } from "../../config/forms";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <p className={styles.feedbackSuccess} role="status">
        Thanks! Your message was sent successfully.
      </p>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className={styles.fieldError}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={styles.fieldError}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Type your message..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={styles.fieldError}
          />
        </label>
        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.submit}
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      <ValidationError errors={state.errors} className={styles.feedbackError} />
    </>
  );
}
