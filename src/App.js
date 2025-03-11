import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Problems from "./components/Problems";
import AIClimateSolutions from "./components/AIClimateSolutions";
import InteractiveQuiz from "./components/InteractiveQuiz";
import References from "./components/References"; // Import References Page
import "./styles.css"; // Global styles for all components


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/solutions" element={<AIClimateSolutions />} />
        <Route path="/quiz" element={<InteractiveQuiz />} />
        <Route path="/references" element={<References />} /> {/* Add Route for References */}
      </Routes>
    </Router>
  );
}
