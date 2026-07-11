import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Work />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
