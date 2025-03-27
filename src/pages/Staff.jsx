import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dosen1 from "../assets/stti-1.jpeg";

const Staff = () => {
    return (
        <>
            <Navbar />
            <div className="sejarah w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen py-32">
                <h1 className="text-2xl font-bold mb-8">Staff STTII Purwokerto</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={Dosen1} alt="Dwiyono, M.Th" />
                        <h3 className="text-lg font-semibold">Dwiyono, M.Th</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={Dosen1} alt="Dwiyono, M.Th" />
                        <h3 className="text-lg font-semibold">Dwiyono, M.Th</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={Dosen1} alt="Dwiyono, M.Th" />
                        <h3 className="text-lg font-semibold">Dwiyono, M.Th</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={Dosen1} alt="Dwiyono, M.Th" />
                        <h3 className="text-lg font-semibold">Dwiyono, M.Th</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={Dosen1} alt="Dwiyono, M.Th" />
                        <h3 className="text-lg font-semibold">Dwiyono, M.Th</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Staff;
