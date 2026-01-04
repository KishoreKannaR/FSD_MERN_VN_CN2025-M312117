import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Book a Doctor</span>
      </div>

      <div className="navbar-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-btn">
          Register
        </Link>
      </div>
    </nav>
  );
}
