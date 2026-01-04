import { useNavigate, NavLink } from "react-router-dom";
import "./UserSidebar.css";
import Footer from "../common/Footer";

export default function UserSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="user-sidebar">
      <h3 className="sidebar-logo">Book A Doctor</h3>

      <nav className="sidebar-nav">
        <NavLink
          to="/user"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>

        <NavLink
          to="/user/book-appointment"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Book Appointment
        </NavLink>

        <NavLink
          to="/apply-doctor"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Apply for Doctor
        </NavLink>

        <button className="logout-btn" onClick={logout}>Logout</button>
      </nav>
    </div>
  );
}
