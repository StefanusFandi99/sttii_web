import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo-sttii.png";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-sky-400 text-white  px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Logo Section */}
      <div className="border-b pb-1 border-gray-200 flex items-center gap-2">
        <img src={logo} alt="Logo" className="size-20 w-auto pt-2" />
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 my-2">
        <div>
          <h4 className="text-md font-semibold">Profil</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p><Link to="/pricing" className="inline-flex gap-x-2">Sejarah</Link></p>
            <p><Link to="/changelog" className="inline-flex gap-x-2">Visi & Misi</Link></p>
            <p><Link to="/docs" className="inline-flex gap-x-2">Struktur Organisasi</Link></p>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-semibold">Informasi</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p><Link to="/konsultasi" className="inline-flex gap-x-2">Beasiswa</Link></p>
            <p><Link to="/artikel" className="inline-flex gap-x-2">Penmaru</Link></p>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-semibold">Layanan</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p><Link to="/kontak" className="inline-flex gap-x-2">Unduh</Link></p>
            <p><Link to="/faq" className="inline-flex gap-x-2">Event</Link></p>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-semibold">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61573062093072" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/sttiipurwokerto.official/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@sttiipurwokerto" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-white pb-2">STTII Purwokerto @ 2025</p>
      </div>
    </footer>
  );
};

export default Footer;