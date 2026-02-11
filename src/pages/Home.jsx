import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUserNurse, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

import Services from "./Sevices";
import Customers from "./Customers";
import News_letter from "./news_letter";
import Get_in_touch from "./get_in_touch";
import Nav from "../components/Nav";
import Sidebar from "../components/SideBar";
import WhyChooseUs from "./Whychoose";

export default function Home() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const showRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContent(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (showRef.current) observer.observe(showRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen" aria-labelledby="hero-heading">
        <img
          src="https://ik.imagekit.io/hifi/imgs/project1.png?updatedAt=1769523710540"
          alt="Professional home nursing care services"
          width="1200"
          height="600"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        <Nav />
        <Sidebar content={show} />

        <div
          ref={showRef}
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center text-white"
          data-aos="fade"
        >
          <h1 id="hero-heading" className="text-3xl font-bold mb-4">
            <Typewriter
              words={["Best Home Care", "Excellent Elder care", "Personalized care"]}
              loop
              cursor
              typeSpeed={80}
            />
          </h1>

          <p className="text-base mb-6">
            Professional nurses cares for your loved ones
          </p>

          <div className="flex gap-4">
            <a
              href="https://wa.me/919999999999"
              aria-label="Contact us on WhatsApp"
              className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 font-semibold"
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
              WhatsApp
            </a>

            <a
              href=""
              aria-label="Call our support number"
              className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-semibold"
            >
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>

        {/* Bottom sticky bar */}
        <nav
          aria-label="Quick contact options"
          className={`fixed bottom-0 left-0 w-full bg-black/70 z-150 flex justify-between items-center px-4 py-2 transition-opacity duration-200 ${
            content ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <FontAwesomeIcon
            icon={faUserNurse}
            size="lg"
            color="white"
            aria-hidden="true"
          />

          <a
            href="https://wa.me/"
            aria-label="Chat with us on WhatsApp"
            className="h-11 w-11 rounded-full bg-green-500 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
          </a>

          <a
            href=""
            aria-label="Call us now"
            className="h-11 w-11 rounded-full bg-red-500 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={show}
            onClick={() => setShow(!show)}
            className="z-190"
          >
            <FontAwesomeIcon icon={faNavicon} size="lg" color="white" aria-hidden="true" />
          </button>
        </nav>
      </section>

      {/* CONTENT SECTIONS */}
      <Services />
      <WhyChooseUs />
      <Customers />
      <News_letter />
      <Get_in_touch />
    </>
  );
}
