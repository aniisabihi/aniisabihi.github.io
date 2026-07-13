import { useEffect, useMemo, useState } from "react";

const SNIPPETS = [
  `async function scanRepo(path: string) {
  const files = await glob("**/*", { cwd: path });
  return detectStack(files);
}`,
  `query ProductList($take: Int!) {
  products(options: { take: $take }) {
    items { id name slug }
  }
}`,
  `export function CartButton() {
  const { totalQuantity } = useCart();
  return <button>{totalQuantity} items</button>;
}`,
];

const TYPING_MS = 28;
const PAUSE_MS = 2200;
const DELETE_MS = 14;

export default function CodeTerminal() {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayed, setDisplayed] = useState(
    prefersReducedMotion ? SNIPPETS[0] : "",
  );
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const fullText = SNIPPETS[snippetIndex];
    let timeout: number;

    if (!isDeleting && displayed === fullText) {
      timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_MS);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setSnippetIndex((index) => (index + 1) % SNIPPETS.length);
    } else {
      const nextLength = displayed.length + (isDeleting ? -1 : 1);
      timeout = window.setTimeout(
        () => setDisplayed(fullText.slice(0, nextLength)),
        isDeleting ? DELETE_MS : TYPING_MS,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, prefersReducedMotion, snippetIndex]);

  const lines = displayed.split("\n");

  return (
    <div className="code-terminal" aria-hidden="true">
      <div className="code-terminal__chrome">
        <span className="code-terminal__dot code-terminal__dot--red" />
        <span className="code-terminal__dot code-terminal__dot--yellow" />
        <span className="code-terminal__dot code-terminal__dot--green" />
        <span className="code-terminal__title">portfolio.ts</span>
      </div>
      <pre className="code-terminal__body">
        <code>
          {lines.map((line, index) => (
            <span key={`${snippetIndex}-${index}`} className="code-terminal__line">
              <span className="code-terminal__ln">{index + 1}</span>
              <span className="code-terminal__text">{line || " "}</span>
            </span>
          ))}
          {!prefersReducedMotion && (
            <span className="code-terminal__cursor" aria-hidden="true">
              |
            </span>
          )}
        </code>
      </pre>
    </div>
  );
}
