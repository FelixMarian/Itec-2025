import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

// Europa
import Spania from "./pages/europaPages/Spania";
import Romania from "./pages/europaPages/Romania";
import Germania from "./pages/europaPages/Germania";
import UK from "./pages/europaPages/UK";

// America
/*import USA from "./pages/americaPages/USA";
import Mexic from "./pages/americaPages/Mexic";
import Jamaica from "./pages/americaPages/Jamaica";
import Brazilia from "./pages/americaPages/Brazilia";
import Argentina from "./pages/americaPages/Argentina";*/


// Africa
import Ethiopia from "./pages/africaPages/Ethiopia";
import Nigeria from "./pages/africaPages/Nigeria";
import AfricaDeSud from "./pages/africaPages/AfricaDeSud";
import Camerun from "./pages/africaPages/Camerun";

// Asia
/*import Koreea from "./pages/asiaPages/Koreea";
import Japonia from "./pages/asiaPages/Japonia";
import China from "./pages/asiaPages/China";
import Rusia from "./pages/asiaPages/Rusia";
*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Europa */}
                <Route path="/europa/spania" element={<Spania />} />
                <Route path="/europa/romania" element={<Romania />} />
                <Route path="/europa/germania" element={<Germania />} />
                <Route path="/europa/uk" element={<UK />} />

                {/* America
                <Route path="/america/usa" element={<USA />} />
                <Route path="/america/mexic" element={<Mexic />} />
                <Route path="/america/jamaica" element={<Jamaica />} />
                <Route path="/america/brazilia" element={<Brazilia />} />
                <Route path="/america/argentina" element={<Argentina />} /> */}

                {/* Africa */}
                <Route path="/africa/ethiopia" element={<Ethiopia />} />
                <Route path="/africa/nigeria" element={<Nigeria />} />
                <Route path="/africa/africadesud" element={<AfricaDeSud />} />
                <Route path="/africa/camerun" element={<Camerun />} />

                {/* Asia
                <Route path="/asia/koreea" element={<Koreea />} />
                <Route path="/asia/japonia" element={<Japonia />} />
                <Route path="/asia/china" element={<China />} />
                <Route path="/asia/rusia" element={<Rusia />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
