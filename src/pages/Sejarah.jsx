import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Background from "../assets/sttii-9.jpeg";

const Sejarah = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-48 overflow-hidden">
                <img className="w-full h-full object-cover shadow-lg" src={Background} alt="Background" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold pt-16">Sejarah STTII Purwokerto</h1>
                </div>
            </div>
            <div className="sejarah w-full bg-blue-900 text-white px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center min-h-screen py-10">
            <h1 className="text-white text-3xl font-bold pb-5">Sejarah Singkat STTII Purwokerto</h1>
                <p className="max-w-2xl">
                    Berdirinya Sekolah Tinggi Teologi Injili Indonesia Purwokerto tidak lepas dari Visi dan Misi yang telah Tuhan berikan kepada hamba-Nya Pdt. Dr. Chris Marantika, D.D. yang dikenal dengan visi 1.1.1. STTII Purwokerto merupakan Perguruan Tinggi Teologi Injili (Alkitabiah) yang bersifat Interdenominasi yang pertama di Purwokerto, Jawa Tengah. Dan saat ini di Purwokerto sendiri telah berdiri tiga kampus pendidikan teologi. Hal ini menunjukan gairah pelayanan rohani di Purwokerto mengalami peningkatan. Adalah sebuah team yang terdiri dari bapak Pdt. Dr. Imanuel Sukardi, M.Th, bapak Pdt. Maresa Supaeran, M.Mis dan bapak Pdt. Suko Raharjo, M.Div. yang telah diutus oleh Pdt. Dr. Chris Marantika, D.D. untuk merintis STII (Seminari Theologia Injili Indonesia) di Purwokerto. Dengan keyakinan hidup oleh iman, mereka datang ke Purwokerto untuk memulai perintisan STII pada tahun 1985. Oleh karena anugerah Tuhan, gereja-gereja di Purwokerto menyambut dengan baik untuk berdirinya STII ini, hal ini terlihat dari animo beberapa gembala sidang yang ikut belajar (sebagai mahasiswa angkatan pertama) di STII Purwokerto.
                    <br /> <br />
                    STII Purwokerto dirintis dan dimulai pada tahun 1985 dengan jumlah mahasiswa kelas perdana 22 mahasiswa, namun peresmian STII Purwokerto sendiri dilakukan pada tanggal 14 Februari 1986. STII diresmikan oleh Pdt. Dr. Chris Marantika, D.D masih dalam program pendidikan Diploma Dua (D2) dengan struktur saat itu: Direktur bapak Imanuel Sukardi, S.Th., Pembantu Direktur I bapak Soko Raharjo, S.Th dan Pembantu Direktur II bapak Maresa Supaeran, B.Th. dan kampus pertama terletak di Jl. Pramuka no. 88 Purwokerto.
                    <br /> <br />
                    Puji Tuhan, dalam perjalanan yang panjang seiring dengan peningkatan program studi menjadi S1 Teologi maka pada tahun 1990 bentuk dan nama lembaga ini berubah menjadi Sekolah Tinggi Teologi Injili Indonesia (STTII). Bapak Sunardi Herianto, M.Th menjabat ketua menggantikan bapak Pdt. Imanuel Sukardi, M.Th. bapak Sunardi memimpin STTII Purwokerto hingga 2004. Oleh karena permintaan gereja dan sinode agar bapak Sunardi lebih fokus ke penggembalaan, maka beliau mengundurkan diri dari STTII Purwokerto pada tahun 2004. Oleh keputusan Yayasan Iman Indonesia, selanjutnya kepemimpinan STTII Purwokerto dilanjutkan oleh bapak Pdt. Dr. Esron Harianja, M.Th. hingga tahun 2020. Saat ini STTII Purwokerto dipimpin oleh Dr. Pangeran Manurung, M.Th. STTII Purwokerto menerapkan pola kehidupan asrama, kecuali mahasiswa yang berkeluarga, STTII Purwokerto menyediakan asrama bagi mahasiswa putra dan putri sehingga semua mahasiswa harus tinggal di asrama, dengan menempati lahan yang luas membuat lingkungan STTII Purwokerto sangat asri dan cocok menjadi lingkungan belajar. Dan Puji Tuhan pada bulan Juli 2019, Program studi teologi di STTII Purwokerto telah direakreditasi dari BAN-PT.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Sejarah;
