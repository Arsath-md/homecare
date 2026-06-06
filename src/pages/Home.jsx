import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserNurse,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

import Nav from "../components/Nav";
import Sidebar from "../components/SideBar";

import Services from "./Sevices";
import Customers from "./Customers";
import News_letter from "./news_letter";
import Get_in_touch from "./get_in_touch";
import WhyChooseUs from "./Whychoose";
import FloatingWA from "../components/whatsapp";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);

  const heroRef = useRef(null);

  const PHONE = "+919999999999";
  const WHATSAPP = "919999999999";

useEffect(() => {
  document.body.style.overflow = sidebarOpen
    ? "hidden"
    : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [sidebarOpen]);

  return (
    <>
      {/* HERO SECTION */}
  <section
  ref={heroRef}
  className="relative min-h-screen overflow-hidden"
  aria-labelledby="hero-heading"
>
  {/* Background */}
  <img
    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1920&auto=format&fit=crop"
    alt="Professional caregiver helping elderly patient at home"
    width={1920}
    height={1080}
    loading="eager"
    fetchPriority="high"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"
    aria-hidden="true"
  />

  {/* Navigation */}
  <Nav
  onMenuClick={() =>
    setSidebarOpen(!sidebarOpen)
  }
/>

<Sidebar
  content={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>
  {/* Hero Content */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-5 w-full">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span>🏥</span>
            <span className="text-sm">
              Trusted Home Care Services
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Care With
            <span className="text-green-400">
              {" "}Trust
            </span>
            <br />

            At Your
            <span className="text-blue-400">
              {" "}Doorstep
            </span>
          </h1>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl text-green-300 font-semibold mb-5">
            <Typewriter
              words={[
                "Patient Care",
                "Elder Care",
                "Nursing Care",
                "Baby Care",
                "Physiotherapy Care",
              ]}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={40}
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
            Professional patient care, elderly care,
            nursing support, physiotherapy,
            medicine delivery and home assistance
            available 24/7 for your loved ones.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Patient Care",
              "Old Age Care",
              "Nursing Care",
              "Baby Care",
              "Physiotherapy",
            ].map((service) => (
              <span
                key={service}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  backdrop-blur-md
                  text-sm
                "
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-green-500
                hover:bg-green-600
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                shadow-lg
              "
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp Now
            </a>

            <a
              href={`tel:${PHONE}`}
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-white
                text-black
                hover:scale-105
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                shadow-lg
              "
            >
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-white">
                24/7
              </h3>
              <p className="text-gray-300">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                100+
              </h3>
              <p className="text-gray-300">
                Families Served
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Verified
              </h3>
              <p className="text-gray-300">
                Caregivers
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-center">

          <div
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              p-8
              w-full
              max-w-md
              animate-float
            "
          >
            <h2 className="text-white text-3xl font-bold mb-6">
              Our Services
            </h2>

            <div className="space-y-4">

              {[
                "Patient Care",
                "Old Age Care",
                "Nursing Care",
                "Baby Care",
                "Physiotherapy Care",
                "Doctor Visit",
                "Lab Test",
                "Ambulance Service",
                "Medicine Delivery",
                "Household Care",
              ].map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-white/5
                    rounded-xl
                    p-3
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <span className="text-white">
                    {service}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

    </div>
  </div>

  {/* Floating Bottom Contact Bar */}
  <nav
    aria-label="Quick Contact"
    className={`
      fixed
      bottom-0
      left-0
      right-0
      z-50
      bg-black/80
      backdrop-blur-md
      transition-all
      duration-300
      ${
        showBottomBar
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }
    `}
  >
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

      <div className="flex items-center gap-3 text-white">
        <FontAwesomeIcon
          icon={faUserNurse}
          className="text-xl"
        />

        <span className="hidden sm:block">
          Home Care Support
        </span>
      </div>

      <div className="flex items-center gap-4">

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            h-12
            w-12
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
          "
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-white"
          />
        </a>

        <a
          href={`tel:${PHONE}`}
          className="
            h-12
            w-12
            rounded-full
            bg-red-500
            flex
            items-center
            justify-center
          "
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="text-white"
          />
        </a>

      </div>
    </div>
  </nav>
</section>

      {/* MAIN CONTENT */}
      <main>
        <Services />
        <WhyChooseUs />
        <Customers />
        <News_letter />
        <Get_in_touch />
      </main>
      <FloatingWA/>
    </>
  );
}