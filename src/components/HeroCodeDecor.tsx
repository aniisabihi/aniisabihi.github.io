const DECOR_LINES = [
  {
    text: "import type { Post } from './types'",
    top: "6%",
    left: "18%",
    delay: "0s",
  },
  {
    text: "const stack = ['TS', 'React']",
    top: "18%",
    left: "48%",
    delay: "-2s",
  },
  {
    text: "export async function build()",
    top: "30%",
    left: "24%",
    delay: "-4s",
  },
  { text: "=> deploy(headless)", top: "42%", right: "6%", delay: "-6s" },
  {
    text: "type Engineer = { ship: true }",
    top: "54%",
    left: "14%",
    delay: "-8s",
  },
  { text: "return <Component />", top: "66%", left: "42%", delay: "-10s" },
  { text: "{ GraphQL }", top: "78%", left: "32%", delay: "-3s" },
  { text: "await scanRepo()", top: "90%", right: "4%", delay: "-7s" },
] as const;

type DecorLineStyle = {
  top: string;
  left?: string;
  right?: string;
  animationDelay: string;
};

export default function HeroCodeDecor() {
  return (
    <div className="hero-code-decor" aria-hidden="true">
      {DECOR_LINES.map((line) => {
        const style: DecorLineStyle = {
          top: line.top,
          animationDelay: line.delay,
        };

        if ("left" in line && line.left) {
          style.left = line.left;
        }
        if ("right" in line && line.right) {
          style.right = line.right;
        }

        return (
          <span key={line.text} className="hero-code-decor__line" style={style}>
            {line.text}
          </span>
        );
      })}
    </div>
  );
}
