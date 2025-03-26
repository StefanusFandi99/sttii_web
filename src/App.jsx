import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Sejarah from "./pages/Sejarah"; 
import Visimisi from "./pages/Visimisi";
import Teologi from "./pages/Teologi";
import Pak from "./pages/Pak";
import Teologi2 from "./pages/Teologi2";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Sejarah" element={<Sejarah />} />
                <Route path="/Visimisi" element={<Visimisi />} />
                <Route path="/Teologi" element={<Teologi />} />
                <Route path="/Pak" element={<Pak />} />
                <Route path="/Teologi2" element={<Teologi2 />} />
            </Routes>
        </Router>
    );
}

export default App;
