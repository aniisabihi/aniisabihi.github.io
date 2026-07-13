import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

function LegacyWorkRedirect() {
  const { postId } = useParams();
  return <Navigate to={`/experience/${postId ?? ""}`} replace />;
}

function AboutRedirect() {
  return <Navigate to={{ pathname: "/", hash: "about" }} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<AboutRedirect />} />
        <Route path="experience/:postId" element={<PostDetail />} />
        <Route path="work/:postId" element={<LegacyWorkRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
