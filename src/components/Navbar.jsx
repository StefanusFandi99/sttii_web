import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo-sttii.png";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-yellow-500 shadow-md z-50">
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between py-3">
                    {/* Logo */}
                    <div className="logo">
                        <img src={Logo} alt="Logo" className="h-12" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-white text-2xl">
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navigation */}
                    <ul className={`lg:flex gap-8 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-yellow-500 lg:bg-transparent flex-col lg:flex-row items-center transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "flex" : "hidden"}`}>
                        <li>
                            <Link to="/" className="font-bold text-white hover:text-blue-950 transition cursor-pointer block px-4 py-2">Beranda</Link>
                        </li>

                        {/* Profil Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-bold text-white hover:text-blue-950 transition cursor-pointer block px-4 py-2"
                                onClick={() => toggleDropdown(0)}
                            >
                                Profil
                            </span>
                            {openDropdown === 0 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                                    <li className="hover:bg-blue-400 px-4 py-2"><Link to="/sejarah">Sejarah</Link></li>
                                    <li className="hover:bg-blue-400 px-4 py-2"><Link to="/Visimisi">Visi & Misi</Link></li>
                                    <li className="hover:bg-blue-400 px-4 py-2"><Link to="/staff">Staff</Link></li>
                                    <li className="hover:bg-blue-400 px-4 py-2"><Link to="/beasiswa">Beasiswa</Link></li>
                                    <li className="hover:bg-blue-400 px-4 py-2"><Link to="/pmb">PMB</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Prodi Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-bold text-white hover:text-blue-950 transition cursor-pointer block px-4 py-2"
                                onClick={() => toggleDropdown(1)}
                            >
                                Prodi
                            </span>
                            {openDropdown === 1 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/teologi">S1 Teologi</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/pak">S1 PAK</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/teologi2">S2 Teologi</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Informasi Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-bold text-white hover:text-blue-950 transition cursor-pointer block px-4 py-2"
                                onClick={() => toggleDropdown(2)}
                            >
                                Informasi
                            </span>
                            {openDropdown === 2 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/kegiatan">Kegiatan</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/galeri">Galeri</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/unduh">Unduh</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link to="/kontak-kami" className="font-bold text-white hover:text-blue-950 transition cursor-pointer block px-4 py-2">Kontak Kami</Link>
                        </li>



                        {/* Pendaftaran Button (Mobile) */}
                        <li className="lg:hidden block">
                            <a href="https://docs.google.com/forms/d/139LIYHsAIiw69IieStFIKfVtZebdP_N8g4PISbkYMbA/viewform" className="bg-blue-950 text-white font-bold px-4 py-2 rounded-md block text-center hover:bg-yellow-500">Pendaftaran</a>
                        </li>
                    </ul>

                    {/* Pendaftaran Button (Desktop) */}
                    <div className="hidden lg:flex">
                        <a href="https://docs.google.com/forms/d/139LIYHsAIiw69IieStFIKfVtZebdP_N8g4PISbkYMbA/viewform" className="bg-blue-950 text-white font-bold px-4 py-2 rounded-md hover:bg-yellow-500">Pendaftaran</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
