import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Teologi2 = () => {
    return (
        <>
            <Navbar />
            <div className="teologi2 w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl font-bold mb-4">S2 Teologi</h1>
                <p className="max-w-2xl">
                Program S2 Teologi Kristen (Magister Teologi atau M.Th.) adalah jenjang pendidikan lanjut dalam bidang teologi yang bertujuan untuk memperdalam pemahaman tentang ajaran Kristen, meningkatkan keterampilan akademik, serta mempersiapkan mahasiswa untuk kepemimpinan dalam gereja, pendidikan, atau pelayanan lainnya. Sistem perkuliahan S2 Teologi diselanggarakan secara online via Zoom Meeting (Full Online). Waktu perkuliahan program ini dilakukan pada hari senin-jumat pada pukul 17:30-21:30 WIB. Studi program ini ditempuh selama 2 tahun (2 semester).
                </p>

            </div>
            <Footer />
        </>
    );
};

export default Teologi2;