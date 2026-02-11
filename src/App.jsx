import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy-loaded routes
const Home = lazy(() => import("./pages/Home"));
const Forms = lazy(() => import("./components/form"));
const About = lazy(() => import("./pages/About"))

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  // 🔥 IMPORTANT: refresh AOS on route change
  // useEffect(() => {
  //   AOS.refresh();
  // }, [location.pathname]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:title" element={<Forms />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Suspense>
  );
}

export default App;
