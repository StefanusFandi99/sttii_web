import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Teologi = () => {
    return (
        <>
            <Navbar />
            <div className="teologi w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl font-bold mb-4">S1 Teologi</h1>
                <p className="max-w-2xl">
                    S1 Teologi adalah program pendidikan yang mempelajari tentang ajaran, doktrin, sejarah, serta praktik kekristenan secara mendalam. Program ini bertujuan untuk membentuk pemahaman yang kuat mengenai iman Kristen, memperlengkapi mahasiswa dalam pelayanan gerejawi, serta mengembangkan pemikiran teologis yang kritis dan aplikatif.
        <br /><br />
                    S1 TEOLOGI REGULER PAGI (S.Th)
                    Sasaran prodi ini difokuskan untuk membentuk generasi muda dengan sistem Asrama dan wajib on-site di Kampus.
        <br /> <br />
                    S1 TEOLOGI REGULER MALAM (S.Th)
                    Sasaran prodi ini ditujukan bagi kalangan Profesional seperti Aktivis Gereja, Majelis, Pemimpin, Koordinator Kelompok Sel, Pelayan Altar, Gembala Persekutuan Doa, atau Jemaat awam yang hendak mendalami Alkitab dan
                    mengembangkan pelayanan pastoral dari berbagai aspek.
                </p>

            </div>
            <Footer />
        </>
    );
};

export default Teologi;