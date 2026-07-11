import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Work from "./pages/Work";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="work/:postId" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
