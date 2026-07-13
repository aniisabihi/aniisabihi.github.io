const DECOR_LINES = [
  {
    text: "import type { Post } from './types'",
    top: "8%",
    left: "4%",
    delay: "0s",
  },
  {
    text: "const stack = ['TS', 'React', 'GraphQL']",
    top: "22%",
    left: "68%",
    delay: "-3s",
  },
  {
    text: "export async function build()",
    top: "48%",
    left: "8%",
    delay: "-6s",
  },
  { text: "=> deploy(headless)", top: "62%", left: "58%", delay: "-9s" },
  {
    text: "type Engineer = { ship: true }",
    top: "78%",
    left: "22%",
    delay: "-12s",
  },
  { text: "return <Component />", top: "88%", left: "72%", delay: "-15s" },
] as const;

export default function AboutCodeDecor() {
  return (
    <div className="about-code-decor" aria-hidden="true">
      {DECOR_LINES.map((line) => (
        <span
          key={line.text}
          className="about-code-decor__line"
          style={{
            top: line.top,
            left: line.left,
            animationDelay: line.delay,
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  );
}
