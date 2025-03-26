import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Sejarah from "./pages/Sejarah"; 
// (tambahkan semua halaman lain di sini)

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/" element={<Sejarah />} />
                {/* Tambahkan semua Route sesuai dengan file yang ada */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
