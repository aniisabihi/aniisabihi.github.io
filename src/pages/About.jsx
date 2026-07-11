import { SITE } from "../config/site.js";

export default function About() {
  return (
    <section className='about-page'>
      <div className='about-page__inner'>
        <div className='about-page__hero'>
          <div className='about-page__photo' style={{ "--animation-order": 1 }}>
            <img src='/img/aniisa_hi.PNG' alt='Aniisa Bihi' />
          </div>

          <div className='about-page__bio' style={{ "--animation-order": 2 }}>
            <h1>I&apos;m Aniisa</h1>
            <p>
              I am a Software Developer intrigued by visual problem-solving and
              forming intuitive solutions. Through different engagements and
              work, I have obtained a broad set of skills for my interest in
              frontend development, UX, and information visualization.
            </p>
            <p>
              I enjoy putting time on details and visual attributes that elevate
              the user experience. My career objective is to develop advanced
              and modern digital products, focused on accessibility for all.
            </p>
            <p>
              Currently, I am mostly interested in information and scientific
              visualization, web and app development, and general frontend work.
              In my free time, I enjoy the company of friends, parlor games,
              food, self-care, documentaries, and true crime.
            </p>
            <p>
              Feel free to check out{" "}
              <a href={SITE.resumePath} target='_blank' rel='noreferrer'>
                my resume
              </a>{" "}
              or reach out below.
            </p>
          </div>
        </div>

        <div className='about-page__contact' style={{ "--animation-order": 3 }}>
          <h2>Want to know more about me?</h2>
          <p className='about-page__contact-intro'>
            Send a message and I will get back to you as soon as I can.
          </p>
          <form
            className='contact-form'
            action={`mailto:${SITE.email}`}
            method='post'
            encType='text/plain'
          >
            <label className='contact-form__field'>
              <span className='contact-form__label'>Name</span>
              <input
                type='text'
                name='name'
                placeholder='Your name'
                autoComplete='name'
              />
            </label>
            <label className='contact-form__field'>
              <span className='contact-form__label'>Email</span>
              <input
                type='email'
                name='email'
                placeholder='you@example.com'
                autoComplete='email'
              />
            </label>
            <label className='contact-form__field'>
              <span className='contact-form__label'>Message</span>
              <textarea
                name='message'
                rows={4}
                placeholder='Type your message...'
              />
            </label>
            <div className='contact-form__actions'>
              <button type='submit' className='contact-form__submit'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
