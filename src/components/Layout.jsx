import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";

export default function Layout() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("window-opened", skillsOpen);
    return () => document.body.classList.remove("window-opened");
  }, [skillsOpen]);

  return (
    <div className='wrapper'>
      <Header onOpenSkills={() => setSkillsOpen(true)} />
      <Outlet />
      <Skills onClose={() => setSkillsOpen(false)} />
      <Footer />
    </div>
  );
}
