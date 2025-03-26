import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-sttii.png";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);


    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
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
        <div className="navbar fixed top-0 left-0 w-full bg-cyan-50 shadow-md z-50">
            <div className="container mx-auto px-3">
                <div className="navbar-box flex items-center justify-between py-2">
                    {/* Logo */}
                    <div className="logo">
                        <img src={Logo} alt="Logo" className="h-12" />
                    </div>

                    {/* Navigation */}
                    <ul className="flex lg:gap-12 gap-4 relative">
                        {/* Beranda (Tanpa Dropdown) */}
                        <li>
                            <Link to="/" className="font-medium opacity-75 hover:opacity-100 transition">
                                Beranda
                            </Link>
                        </li>

                        {/* Profil Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-medium opacity-75 hover:opacity-100 transition cursor-pointer"
                                onClick={() => toggleDropdown(0)}
                            >
                                Profil
                            </span>
                            {openDropdown === 0 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/sejarah">Sejarah</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/visi-misi">Visi & Misi</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/staff">Staff</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/beasiswa">Beasiswa</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/pmb">PMB</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Prodi Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-medium opacity-75 hover:opacity-100 transition cursor-pointer"
                                onClick={() => toggleDropdown(1)}
                            >
                                Prodi
                            </span>
                            {openDropdown === 1 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/s1-teologi">S1 Teologi</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/s1-pak">S1 PAK</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/s2-teologi">S2 Teologi</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Informasi Dropdown */}
                        <li className="relative dropdown-container">
                            <span
                                className="font-medium opacity-75 hover:opacity-100 transition cursor-pointer"
                                onClick={() => toggleDropdown(2)}
                            >
                                Informasi
                            </span>
                            {openDropdown === 2 && (
                                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/kegiatan">Kegiatan</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/galeri">Galeri</Link></li>
                                    <li className="hover:bg-gray-200 px-4 py-2"><Link to="/unduh">Unduh</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Kontak Kami (Tanpa Dropdown) */}
                        <li>
                            <Link to="/kontak-kami" className="font-medium opacity-75 hover:opacity-100 transition">
                                Kontak Kami
                            </Link>
                        </li>
                    </ul>

                    {/* Pendaftaran Button */}
                    <div className="bg-sky-400 flex rounded-md px-4 py-2 text-white font-bold hover:bg-sky-500 cursor-pointer">
                        <a href="https://docs.google.com/forms/d/139LIYHsAIiw69IieStFIKfVtZebdP_N8g4PISbkYMbA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAab_QGVSCibr_IawHGVor6B4GDLYRw6aZvy3NuSQXpgIkOLOJShiJJQsLPw_aem_kZLAsKryQuQ3WIxsyXF-AA&edit_requested=true">Pendaftaran</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
