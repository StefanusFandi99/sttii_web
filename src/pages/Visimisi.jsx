import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Background from "../assets/sttii-9.jpeg";


const Visimisi = () => {
    return (
        <>
            <Navbar />
             <div className="relative w-full h-48 overflow-hidden">
                            <img className="w-full h-full object-cover shadow-lg" src={Background} alt="Background" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <h1 className="text-white text-3xl font-bold pt-16">Visi & Misi</h1>
                            </div>
                        </div>
            <div className="visimisi w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl font-bold mb-4">Visi STTII Purwokerto</h1>
                <p className="max-w-2xl">
                    Menjadi Pendidikan Tinggi Teologi Injili yang unggul, bersifat Imani dan Interdenominasi, untuk menghasilkan abdi yang kompeten di bidang teologi (sarjana), berakhlak mulia (suci)
                    dan berkomitmen tinggi terhadap pelayanan (setia) dalam rangka mewujudkan Indonesia 1.1.1.
                </p>
                <h1 className="text-2xl font-bold mb-4 mt-2">Misi STTII Purwokerto</h1>
                <p className="max-w-2xl">
                    1. Menyelenggarakan pendidikan tinggi Teologi Injili yang unggul untuk menghasilkan abdi yang kompeten, berakhlak mulia, dan berkomitmen tinggi dalam pelayanan.
                    <br></br>2. Mengembangkan teologi injili melalui pengajaran dan penelitian yang bermanfaat bagi gereja dan masyarakat.
                    <br></br>3. Menyelenggarakan pengabdian kepada gereja dan masyarakat dalam rangka mewujudkan Indonesia 1.1.1.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Visimisi;