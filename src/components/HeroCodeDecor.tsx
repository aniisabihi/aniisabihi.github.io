const DECOR_LINES = [
  {
    text: "import { coffee } from 'morning'",
    top: "5%",
    left: "20%",
    delay: "0s",
  },
  {
    text: "const stack = ['TS', 'React', 'GraphQL']",
    top: "13%",
    left: "40%",
    delay: "-1.5s",
  },
  {
    text: "// TODO: ship it (it works locally)",
    top: "21%",
    right: "8%",
    delay: "-3s",
  },
  { text: "if (tests.pass) deploy()", top: "29%", left: "16%", delay: "-4.5s" },
  { text: "await scanRepo(path)", top: "37%", left: "44%", delay: "-6s" },
  {
    text: "=> headless ? nice : nicer",
    top: "45%",
    right: "5%",
    delay: "-7.5s",
  },
  {
    text: "type Engineer = { ship: true }",
    top: "53%",
    left: "22%",
    delay: "-9s",
  },
  {
    text: "git commit -m 'welcome to my portfolio ✨✨✨'",
    top: "61%",
    left: "46%",
    delay: "-10.5s",
  },
  { text: "return <Component />", top: "69%", left: "14%", delay: "-12s" },
  {
    text: "player.move('rock') // AI bluff",
    top: "77%",
    left: "34%",
    delay: "-2s",
  },
  { text: "while (alive) refineUX()", top: "85%", right: "6%", delay: "-5s" },
  {
    text: "// feature, not bug. trust.",
    top: "93%",
    left: "26%",
    delay: "-8s",
  },
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
