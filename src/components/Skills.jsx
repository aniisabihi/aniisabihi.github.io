import { SKILLS } from "../data/posts.js";

export default function Skills({ onClose }) {
  return (
    <section
      className='position-absolute d-flex align-items-center justify-content-center text-black bg-blue skills-section'
      data-slideIn='to-top'
    >
      <button
        type='button'
        className='position-absolute skills-close'
        aria-label='Close Skills Section'
        onClick={onClose}
      >
        ✕
      </button>
      <div className='d-flex chart-wrapper'>
        <ul className='chart-levels'>
          <li>Advanced</li>
          <li>Intermediate</li>
          <li>Beginner</li>
          <li>Novice</li>
        </ul>
        <ul className='d-flex justify-content-around align-items-end flex-grow-1 text-center bg-black chart-skills'>
          {SKILLS.map((skill) => (
            <li
              key={skill.name}
              className='position-relative bg-blue'
              data-height={skill.height}
            >
              <span className='position-absolute w-100'>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
