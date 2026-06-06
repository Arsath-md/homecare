import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/Home"));
const Forms = lazy(() => import("./components/form"));
const About = lazy(() => import("./pages/About"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/service/:title"
          element={<Forms />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;