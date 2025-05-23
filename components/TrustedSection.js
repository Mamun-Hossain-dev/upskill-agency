import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

export default function TrustedSection() {
  return (
    <div className="container mx-auto mt-[80px] mb-[52px] text-gray-600 px-2">
      <h2 className="text-indigo-800 text-xl text-center uppercase font-semibold mb-12">
        Trusted by Industry Leaders
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10 justify-center items-center text-center font-medium">
        <div className="flex-box bg-slate-300 rounded">
          <FaGoogle />
          <h2>Google</h2>
        </div>
        <div className="flex-box bg-slate-300 rounded">
          <FaApple />
          <h2>Apple</h2>
        </div>
        <div className="flex-box bg-slate-300 rounded">
          <FaMicrosoft />
          <h2>Microsoft</h2>
        </div>
        <div className="flex-box bg-slate-300 rounded">
          <FaSpotify />
          <h2>Spotify</h2>
        </div>
        <div className="flex-box bg-slate-300 rounded">
          <FaAmazon />
          <h2>Amazon</h2>
        </div>
        <div className="flex-box bg-slate-300 rounded">
          <RiNetflixFill />
          <h2>Netflix</h2>
        </div>
      </div>
    </div>
  );
}
