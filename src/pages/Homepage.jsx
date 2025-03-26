import { useState } from "react";
import AboutImage from "../assets/about.png";
import projek1 from "../assets/stti-1.jpeg";
import projek2 from "../assets/stti-2.jpeg";
import projek3 from "../assets/stti-3.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Homepage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [projek1, projek2, projek3];

    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <Navbar />
            <div className="homepage pt-16">
                <div className="container mx-auto px-4">

                    {/* Hero Section */}
                    <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 pb-5">
                        <div className="box">
                            <h1 className="text-4xl font-medium mb-2">
                                Selamat Datang <span className="font-bold text-sky-400 underline">STTI Purwokerto</span>
                            </h1>
                            <p className="text-base mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet
                                accusantium commodi natus, sequi, voluptatum voluptas.
                            </p>
                            <a href="#" className="bg-sky-400 text-white font-bold hover:bg-sky-500 transition-all py-2 px-4 rounded-full inline-flex items-center">
                                Sejarah <i className="ri-eye-line ml-2"></i>
                            </a>
                        </div>

                        {/* Carousel */}
                        <div className="relative w-full max-w-lg">
                            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                            }`}
                                        alt={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50"
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50"
                            >
                                ❯
                            </button>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="about grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 bg-sky-400 rounded-lg p-6">
                        <div className="box">
                            <img src={AboutImage} alt="About" className="h-auto w-full rounded-lg" />
                        </div>
                        <div className="box text-white">
                            <h1 className="text-4xl font-medium mb-7">
                                VISI & MISI <span className="font-bold text-white">STTI Purwokerto</span>
                            </h1>
                            <h2 className="font-bold py-2">Visi</h2>
                            <p className="text-base">
                                Menjadi Pendidikan Tinggi Teologi Injili yang unggul, bersifat Imani dan Interdenominasi, untuk menghasilkan abdi yang kompeten di bidang teologi (sarjana), berakhlak mulia (suci) dan berkomitmen tinggi terhadap pelayanan (setia) dalam rangka mewujudkan Indonesia 1.1.1.
                            </p>

                            <h2 className="font-bold py-2">Misi</h2>
                            <p className="text-base">
                                1. Menyelenggarakan pendidikan tinggi Teologi Injili yang unggul untuk menghasilkan abdi yang kompeten, berakhlak mulia, dan berkomitmen tinggi dalam pelayanan.<br />
                                2. Mengembangkan teologi injili melalui pengajaran dan penelitian yang bermanfaat bagi gereja dan masyarakat.<br />
                                3. Menyelenggarakan pengabdian kepada gereja dan masyarakat dalam rangka mewujudkan Indonesia 1.1.1.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="services pt-10">
                        <h1 className="text-center text-4xl font-medium mb-2">Program Studi</h1>
                        <p className="text-center mb-6">Program Studi yang tersedia di STTI Purwokerto</p>
                        <div className="services-box grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="box bg-sky-400 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S1 Teologi</h3>
                                <p className="text-base">Program studi yang membekali mahasiswa dengan pemahaman mendalam tentang teologi.</p>
                            </div>
                            <div className="box bg-sky-400 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S1 Pendidikan Agama Kristen</h3>
                                <p className="text-base">Mempersiapkan tenaga pendidik agama Kristen yang kompeten dan berkarakter.</p>
                            </div>
                            <div className="box bg-sky-400 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S2 Teologi</h3>
                                <p className="text-base">Program lanjutan untuk memperdalam pemahaman teologi secara akademik.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Homepage;
