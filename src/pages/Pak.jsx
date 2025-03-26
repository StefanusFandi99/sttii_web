import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Pak = () => {
    return (
        <>
            <Navbar />
            <div className="pak w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl font-bold mb-4">S1 Pendidikan Agama Kristen</h1>
                <p className="max-w-2xl">
                S1 Pendidikan Agama Kristen (PAK) adalah program studi yang berfokus pada pengajaran dan pembinaan iman Kristen melalui pendidikan. Program ini bertujuan untuk mencetak tenaga pendidik, baik untuk sekolah formal (SD, SMP, SMA) maupun pendidikan nonformal (sekolah minggu, katekisasi, dan pelatihan gerejawi), dengan dasar teologi yang kuat serta metode pengajaran yang efektif. Program Pendidikan Agama Kristen (PAK) ini disajikan bagi yang rindu untuk diperlengkapi sebagai seorang pendidik. Pendidikan Agama Kristen lebih mengajarkan pemahaman tentang Agama Kristen yang nantinya akan dapat menjadi seorang guru.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Pak ;