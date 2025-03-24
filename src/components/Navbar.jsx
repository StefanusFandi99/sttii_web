import Logo from "../assets/logo-sttii.png";
const Navbar = () => {
    return (
        <div className="navbar fixed w-full transition-all py-2 bg-cyan-50" >
            <div className="container mx-auto px-3">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <img src={Logo} alt="Logo" className="h-12"/>
                    </div>
                    <ul className="flex lg:gap-12 gap-2">
                        <li>
                            <a href="#" className="font-medium opacity-75">Beranda</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">Profil</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">Prodi</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">Informasi</a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">Kontak Kami</a>
                        </li>
                    </ul>
                    <div className=" social bg-sky-400 flex rounded-md px-4 py-2 text-white font-bold hover:bg-sky-500">Pendaftaran</div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;