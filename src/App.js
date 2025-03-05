import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Home from "./components/Home";  
import EnergyConsumption from "./components/EnergyConsumption";
import CarbonFootprint from "./components/CarbonFootprint";
import AIClimateSolutions from "./components/AIClimateSolutions";
import InteractiveQuiz from "./components/InteractiveQuiz";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/energy" element={<EnergyConsumption />} />
        <Route path="/carbon" element={<CarbonFootprint />} />
        <Route path="/solutions" element={<AIClimateSolutions />} />
        <Route path="/quiz" element={<InteractiveQuiz />} />
      </Routes>
    </Router>
  );
}
