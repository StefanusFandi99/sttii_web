import Logo from "../assets/logo-sttii.png";

const Sejarah = () => {
    return (
        <footer className="bg-cyan-50 shadow-md py-6 mt-10">
            <div className="container mx-auto flex justify-between items-center px-3">
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Logo" className="h-12" />
                </div>

                {/* Navigation Links */}
                <ul className="flex lg:gap-12 gap-4">
                    <li><a href="#" className="text-gray-700 hover:text-sky-500 transition">Beranda</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-sky-500 transition">Profil</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-sky-500 transition">Prodi</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-sky-500 transition">Informasi</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-sky-500 transition">Kontak Kami</a></li>
                </ul>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <a href="#" className="text-gray-700 hover:text-sky-500 transition text-xl">
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-sky-500 transition text-xl">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-sky-500 transition text-xl">
                        <i className="ri-twitter-fill"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Sejarah;
