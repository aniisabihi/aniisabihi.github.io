export default function About() {
  return (
    <div className='grid-container'>
      <div className='aniisa' style={{ "--animation-order": 1 }}>
        <img src='/img/aniisa_hi.PNG' alt='Aniisa Bihi' />
      </div>
      <div className='about' style={{ "--animation-order": 2 }}>
        <h1>I&apos;m Aniisa</h1>
        <p>
          I am a Software Developer intrigued by visual problem-solving and
          forming intuitive solutions. Through different engagements and work, I
          have obtained a broad set of skills for my interest in Frontend
          development, UX, and information visualization. I enjoy putting time
          on details and visual attributes that elate the user experience. My
          career objective is to develop advanced and modern digital products,
          focused on accessibility for all.
        </p>
        <p>
          Currently, I am mostly interested in Information and Scientific
          Visualization, Web and App Development, and general Frontend
          Development. My interest in visualization comes from having a hectic
          mind who likes to have and see things in order. With visualization,
          you can perceive information more understandably, especially if UX has
          been in focus. In my free time, I enjoy the company of friends, parlor
          games, food, self-care, documentaries, and true crime.
        </p>
        <p>
          Feel free to check out{" "}
          <a href='/AniisaBihi_CV.pdf' target='_blank' rel='noreferrer'>
            my resume
          </a>{" "}
          or contact me below!
        </p>
      </div>
      <div className='contact' style={{ "--animation-order": 3 }}>
        <h2>Want to know more about me?</h2>
        <div className='container form-top'>
          <form
            action='mailto:aniisaaden@gmail.com'
            method='post'
            encType='text/plain'
          >
            <div className='form-group'>
              <label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Name'
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                <input
                  type='text'
                  name='email'
                  className='form-control'
                  placeholder='Email'
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                <textarea
                  rows={3}
                  name='message'
                  className='form-control'
                  placeholder='Type Your Message..'
                  style={{ height: "100px" }}
                />
              </label>
            </div>
            <div className='form-right'>
              <div className='form-group'>
                <input className='submit' type='submit' value='Send' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
