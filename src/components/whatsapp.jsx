import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWA() {
  return (
   <a
  href="https://wa.me/919363878868?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-7 right-7 z-[200] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-[30px] text-white shadow-lg animate-[waPulse_2.5s_ease-in-out_infinite]"
>
  <FaWhatsapp />
</a>
  );
}