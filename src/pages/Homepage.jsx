import { useState, useEffect } from "react";
import AboutImage from "../assets/about.png";
import projek1 from "../assets/stti-1.jpeg";
import projek2 from "../assets/stti-2.jpeg";
import projek3 from "../assets/stti-3.jpeg";
import projek4 from "../assets/sttii-4.jpeg";
import projek5 from "../assets/sttii-5.jpeg";
import projek6 from "../assets/sttii-6.jpeg";
import projek7 from "../assets/sttii-7.jpeg";
import projek8 from "../assets/sttii-8.jpeg";
import projek9 from "../assets/sttii-9.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [projek1, projek2, projek3, projek4, projek5, projek6, projek7, projek8, projek9];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <div className="homepage pt-16 pb-8 bg-blue-950">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 pb-5">
                        <div className="box">
                            <h1 className="text-5xl font- mb-2 text-white">
                                Selamat Datang <br /><span className="font-extrabold text-yellow-500">STTII Purwokerto</span>
                            </h1>
                            <p className="text-base mb-4 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet
                                accusantium commodi natus, sequi, voluptatum voluptas.
                            </p>
                            <a href="https://docs.google.com/forms/d/139LIYHsAIiw69IieStFIKfVtZebdP_N8g4PISbkYMbA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAab_QGVSCibr_IawHGVor6B4GDLYRw6aZvy3NuSQXpgIkOLOJShiJJQsLPw_aem_kZLAsKryQuQ3WIxsyXF-AA&edit_requested=true" 
                            className="bg-yellow-400 text-white font-bold hover:bg-yellow-500 transition-all py-2 px-4 rounded-full inline-flex items-center">
                                Daftar Sekarang!<i className="ri-eye-line ml-2"></i>
                            </a>
                        </div>

                        {/* Carousel */}
                        <div className="relative w-full max-w-lg">
                            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
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
                    <div className="about grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 bg-yellow-500 rounded-lg p-6">
                        <div className="box">
                            <img src={AboutImage} alt="About" className="h-auto w-full rounded-lg" />
                        </div>
                        <div className="box text-blue-950">
                            <h1 className="text-4xl font-medium mb-7">
                                VISI & MISI <span className="font-bold text-white">STTI Purwokerto</span>
                            </h1>
                            <h2 className="font-bold py-2 text-blue-950">Visi</h2>
                            <p className="text-base text-white">
                                Menjadi Pendidikan Tinggi Teologi Injili yang unggul, bersifat Imani dan Interdenominasi, untuk menghasilkan abdi yang kompeten di bidang teologi (sarjana), berakhlak mulia (suci) dan berkomitmen tinggi terhadap pelayanan (setia) dalam rangka mewujudkan Indonesia 1.1.1.
                            </p>
                            <h2 className="font-bold py-2 text-blue-950">Misi</h2>
                            <p className="text-base text-white">
                                1. Menyelenggarakan pendidikan tinggi Teologi Injili yang unggul untuk menghasilkan abdi yang kompeten, berakhlak mulia, dan berkomitmen tinggi dalam pelayanan.<br />
                                2. Mengembangkan teologi injili melalui pengajaran dan penelitian yang bermanfaat bagi gereja dan masyarakat.<br />
                                3. Menyelenggarakan pengabdian kepada gereja dan masyarakat dalam rangka mewujudkan Indonesia 1.1.1.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="services pt-10">
                        <h1 className="text-center text-4xl font-medium mb-2 text-white">Program Studi</h1>
                        <p className="text-center mb-6 text-white">Program Studi yang tersedia di STTI Purwokerto</p>
                        <div className="services-box grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="box bg-yellow-500 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S1 Teologi</h3>
                                <p className="text-base">Program studi yang membekali mahasiswa dengan pemahaman mendalam tentang teologi.</p>
                            </div>
                            <div className="box bg-yellow-500 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S1 Pendidikan Agama Kristen</h3>
                                <p className="text-base">Mempersiapkan tenaga pendidik agama Kristen yang kompeten dan berkarakter.</p>
                            </div>
                            <div className="box bg-yellow-500 rounded-lg shadow p-6 text-white text-center">
                                <h3 className="text-xl font-bold mt-4 mb-2">S2 Teologi</h3>
                                <p className="text-base">Program lanjutan untuk memperdalam pemahaman teologi secara akademik.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Slider (New) */}
                    <div className="image-slider mt-10 overflow-hidden relative w-full max-w-8xl mx-auto">
                        <div className="flex space-x-4 animate-marquee">
                            {images.concat(images).map((image, index) => (
                                <img key={index} src={image} className="w-1/3 h-auto rounded-lg" alt={`Slider ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    white-space: nowrap;
                    animation: marquee 10s linear infinite;
                }
            `}</style>
            <div className=" gmaap w-full h-96 my-3 bg-blue-950">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.72110738674!2d109.29775687318929!3d-7.496012273930169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655b69e3709c45%3A0x996c4c09b89bdae7!2sSTTII%20Purwokerto!5e0!3m2!1sid!2sid!4v1743000212280!5m2!1sid!2sid"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <Footer/>
        </>
    );
};

export default Homepage;
