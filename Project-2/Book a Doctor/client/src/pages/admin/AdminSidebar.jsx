import { useNavigate, useLocation } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="admin-sidebar">
      <h3>Admin Panel</h3>

      <div className="admin-nav">
        <p
          className={`admin-link ${isActive("/admin") ? "active" : ""}`}
          onClick={() => navigate("/admin")}
        >
          Dashboard
        </p>

        <p
          className={`admin-link ${isActive("/admin/users") ? "active" : ""}`}
          onClick={() => navigate("/admin/users")}
        >
          Users
        </p>

        <p
          className={`admin-link ${isActive("/admin/doctors") ? "active" : ""}`}
          onClick={() => navigate("/admin/doctors")}
        >
          Doctors
        </p>
      </div>

      <div className="admin-logout" onClick={logout}>
        Logout
      </div>
    </aside>
  );
}
