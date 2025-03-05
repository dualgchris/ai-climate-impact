import { Link } from "react-router-dom";
import "../styles.css"; // Make sure to use the correct relative path

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>AI & Climate Change</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/energy">Energy</Link>
        <Link to="/carbon">Carbon</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}
