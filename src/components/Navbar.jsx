const Navbar = () => {
    return (
        <div className="navbar fixed w-full transition-all py-4">
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-3xl font-bold">Logo Kampus</h1>
                    </div>
                    <ul className="flex lg:gap-12 gap-8">
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