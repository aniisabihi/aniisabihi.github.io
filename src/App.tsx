import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Experience from "./pages/Experience";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

function LegacyWorkRedirect() {
  const { postId } = useParams();
  return <Navigate to={`/experience/${postId ?? ""}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="experience/:postId" element={<PostDetail />} />
        <Route path="work/:postId" element={<LegacyWorkRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
