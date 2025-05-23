import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

export default function TrustedSection() {
  return (
    <div className="container mx-auto mt-[80px] mb-[100px] text-gray-600">
      <h2 className="text-indigo-800 text-xl font-medium text-center mb-12">
        Trusted by Industry Leaders
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10 justify-center items-center text-center font-medium">
        <div className="flex-box">
          <FaGoogle />
          <h2>Google</h2>
        </div>
        <div className="flex-box">
          <FaApple />
          <h2>Apple</h2>
        </div>
        <div className="flex-box">
          <FaMicrosoft />
          <h2>Microsoft</h2>
        </div>
        <div className="flex-box">
          <FaSpotify />
          <h2>Spotify</h2>
        </div>
        <div className="flex-box">
          <FaAmazon />
          <h2>Amazon</h2>
        </div>
        <div className="flex-box">
          <RiNetflixFill />
          <h2>Netflix</h2>
        </div>
      </div>
    </div>
  );
}
