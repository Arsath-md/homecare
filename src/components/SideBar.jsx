import { Link } from "react-router-dom";

export default function Sidebar({ content }) {
  return (
    <aside
      className={`
        ${content ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300
        fixed top-0 left-0
        h-screen w-64
        bg-blue-900 text-white
        z-[320]
        flex flex-col
        overflow-y-auto
      `}
    >
      {/* Logo / Branding */}
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-xl font-bold text-yellow-400 text-center">velan HomeCare</h1>
        <p className="text-sm font-normal opacity-80 text-center">
            Professional nurses for your loved ones
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 z-220 overflow-y-auto">
        <ul className="flex flex-col gap-4 text-left">

          <Link to={"/about"}><li className="hover:text-blue-300 cursor-pointer">About Us</li></Link>
           <a href=""><li className="hover:text-blue-300 cursor-pointer">Contact Us</li></a>
          <a href=""><li className="hover:text-blue-300 cursor-pointer">Terms and Conditions</li></a>
          <a href=""><li className="hover:text-blue-300 cursor-pointer">FAQ</li></a>

          
        </ul>
      </nav>

      {/* Call to Action */}
      <div className="p-6 border-t border-blue-700">
        <button className="w-full bg-white text-blue-900 font-semibold py-2 rounded hover:bg-blue-100">
          Request Free Assessment
        </button>
        <p className="text-center text-sm mt-3 opacity-80">
          Call us: +1 234 567 890
        </p>
      </div>
    </aside>
  );
}
