import { useState } from "react";
import AboutImage from "../assets/about.png";
import projek1 from "../assets/stti-1.jpeg";
import projek2 from "../assets/stti-2.jpeg";
import projek3 from "../assets/stti-3.jpeg";

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
        <div className="homepage pb-10">
            <div className="container mx-auto px-4">
                
                {/* Hero Section */}
                <div className="hero grid grid-cols-2 items-center gap-20 pt-20">
                    <div className="box">
                        <h1 className="text-4xl font-medium mb-2">
                            Selamat Datang di <span className="font-bold text-sky-400 underline">STTI Purwokerto</span>
                        </h1>
                        <p className="text-base mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet
                            accusantium commodi natus, sequi, voluptatum voluptas.
                        </p>
                        <a href="#" className="bg-sky-400 text-white font-bold hover:bg-sky-50 transition-all py-2 px-4 rounded-full inline-flex items-center">
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
                                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                                        index === currentIndex ? "opacity-100" : "opacity-0"
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
                <div className="about grid grid-cols-2 items-center gap-10 pt-10">
                    <div className="box">
                        <img src={AboutImage} alt="About Image" className="h-auto w-full" />
                    </div>
                    <div className="box">
                        <h1 className="text-4xl font-medium mb-7">
                            Tentang <span className="font-bold text-sky-400 underline">STTI Purwokerto</span>
                        </h1>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet
                            accusantium commodi natus, sequi, voluptatum voluptas necessitatibus magni eius omnis.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="services pt-10">
                    <h1 className="text-center text-4xl font-medium mb-2">Layanan</h1>
                    <p className="text-center mb-6">Berbagai layanan terbaik yang kami sediakan</p>
                    <div className="services-box grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="box bg-sky-400 rounded-lg shadow p-6 text-white">
                            <h3 className="text-xl font-bold mt-4 mb-2">Service Name 1</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-6 text-white">
                            <h3 className="text-xl font-bold mt-4 mb-2">Service Name 2</h3>
                            <p className="text-base">Necessitatibus magni eius omnis reiciendis provident beatae incidunt.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-6 text-white">
                            <h3 className="text-xl font-bold mt-4 mb-2">Service Name 3</h3>
                            <p className="text-base">Tempore eveniet accusantium commodi natus, sequi, voluptatum voluptas.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Homepage;
