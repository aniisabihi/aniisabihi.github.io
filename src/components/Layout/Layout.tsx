import { Outlet } from "react-router-dom";
import { UiProvider } from "../../context/UiContext";
import CvOverlay from "../CvOverlay";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <UiProvider>
      <div className={styles.site}>
        <a href="#main-content" className={styles.skipLink}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className={styles.main}>
          <Outlet />
        </main>
        <Footer />
        <CvOverlay />
      </div>
    </UiProvider>
  );
}
