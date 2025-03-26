import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Sejarah from "./pages/Sejarah"; 
// (tambahkan semua halaman lain di sini)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/" element={<Sejarah />} />
            </Routes>
        </Router>
    );
}

export default App;
