import { Outlet } from "react-router-dom";
import { UiProvider } from "../context/UiContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <UiProvider>
      <div className="site">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="site__main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UiProvider>
  );
}
