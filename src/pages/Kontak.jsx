import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Sejarah = () => {
    return (
        <>
            <Navbar />
            <main className="font-poppins ">
                <div className="md:min-h-screen mt-10">
                    <section className="py-8 flex items-center px-4 mx:px-0">
                        <div className="w-full max-w-6xl mx-auto md:p-2 p-4 bg-secondary-300 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:gap-20 gap-8">
                            <div className="bg-blue-950 rounded-lg text-white flex flex-col px-6 py-6 justify-between md:w-1/2">
                                <div>
                                    <h2 className="text-4xl font-semibold">Informasi Kontak</h2>
                                    <p className="mt-2 text-2xl">Bila ada pertanyaan dapat hubungi </p>
                                </div>
                                <ul className="space-y-6">
                                    <li className="text-xl">📞 (021) 1234-5678</li>
                                    <li className="text-xl">✉️ sttiipurwokerto@gmail.com</li>
                                    <li className="text-xl">🔗 stti.web.vercel.com</li>
                                    <li className="text-xl">📍 Purwokerto, Jawa Tengah</li>
                                </ul>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                                    <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                                    <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                                </div>
                            </div>

                            <div className="bg-secondary-300 py-4 pe-6 md:w-1/2">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                        <div>
                                            <label className="block font-semibold text-gray-700">Nama Depan</label>
                                            <input type="text" className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none w-full" />
                                        </div>
                                        <div>
                                            <label className="block font-semibold text-gray-700">Nama Belakang</label>
                                            <input type="text" className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none w-full" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block font-semibold text-gray-700">Email</label>
                                            <input type="email" className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none w-full" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block font-semibold text-gray-700">Nomor Telepon</label>
                                            <input type="text" className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none w-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block">Pilih Subjek:</label>
                                        <div className="flex flex-wrap items-center mt-2 gap-3">
                                            <label className="flex items-center gap-1">
                                                <input type="radio" name="subject" /> Umum
                                            </label>
                                            <label className="flex items-center gap-1">
                                                <input type="radio" name="subject" /> Pendaftaran
                                            </label>
                                            <label className="flex items-center gap-1">
                                                <input type="radio" name="subject" /> Layanan
                                            </label>
                                            <label className="flex items-center gap-1">
                                                <input type="radio" name="subject" /> Saran dan Masukan
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-semibold text-gray-700">Pesan</label>
                                        <textarea placeholder="Tulis pesan anda..." className="p-2 mt-2 w-full border-b border-black bg-transparent rounded-none focus:outline-none h-20"></textarea>
                                    </div>
                                    <button type="submit" className="block font-semibold ml-auto bg-blue-950 text-white py-2 px-14 rounded-3xl w-full md:w-auto">
                                        Kirim
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Sejarah;
