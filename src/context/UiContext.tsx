import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type RefObject,
  type ReactNode,
} from "react";

type UiContextValue = {
  cvOpen: boolean;
  /**
   * @param returnFocusTo Where focus goes when the dialog closes. Defaults to
   * whatever opened it; pass another element when the opener will be hidden
   * by then (e.g. an item inside the collapsed mobile menu).
   */
  openCv: (returnFocusTo?: HTMLElement | null) => void;
  closeCv: () => void;
  cvReturnFocusRef: RefObject<HTMLElement | null>;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [cvOpen, setCvOpen] = useState(false);

  const cvReturnFocusRef = useRef<HTMLElement | null>(null);

  const openCv = useCallback((returnFocusTo?: HTMLElement | null) => {
    cvReturnFocusRef.current = returnFocusTo ?? null;
    setCvOpen(true);
  }, []);
  const closeCv = useCallback(() => setCvOpen(false), []);

  const value = useMemo(
    () => ({ cvOpen, openCv, closeCv, cvReturnFocusRef }),
    [cvOpen, openCv, closeCv],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUi must be used within UiProvider");
  }
  return context;
}
