import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import API from "../../api/axios";
import './DoctorDashboard.css'; // <-- import CSS
import Footer from "../../components/common/Footer";

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await API.get("/user/profile");
      if (res.data.success) setUser(res.data.user);
    } catch (error) {
      console.error("Failed to fetch user profile");
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/doctor/getdoctorappointments");
      setAppointments(res.data.appointments || []);
    } catch {
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (appointmentId, status) => {
    try {
      await API.post("/doctor/handlestatus", { appointmentId, status });
      fetchAppointments();
    } catch {
      alert("Failed to update status");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="doctor-page">
      {/* SIDEBAR */}
      <aside className="doctor-sidebar">
        <h3>Doctor Panel</h3>
        <NavLink to="/doctor" className={({ isActive }) => isActive ? "active" : ""}>
          Appointments
        </NavLink>
        <p className="logout" onClick={logout}>Logout</p>
      </aside>

      {/* MAIN CONTENT */}
      <main className="doctor-main">
        <h2>Hi, {user?.fullName || "User"}</h2>
        <h2>Appointments (Active + History)</h2>

        {loading && <p>Loading...</p>}
        {!loading && appointments.length === 0 && <p>No appointments found</p>}

        {!loading && appointments.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Document</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(a => (
                <tr key={a._id}>
                  <td>{a.userId?.fullName}</td>
                  <td>{a.userId?.phone}</td>
                  <td>{new Date(a.date).toLocaleDateString()}</td>
                  <td>{a.time}</td>
                  <td>
                    {a.document ? (
                      <a href={a.document} target="_blank" rel="noreferrer">View</a>
                    ) : "—"}
                  </td>
                  <td><b>{a.status}</b></td>
                  <td>
                    {a.status === "pending" && (
                      <>
                        <button className="approve-btn" onClick={() => updateStatus(a._id, "approved")}>Approve</button>
                        <button className="reject-btn" onClick={() => updateStatus(a._id, "rejected")}>Reject</button>
                      </>
                    )}
                    {a.status === "approved" && (
                      <button className="complete-btn" onClick={() => updateStatus(a._id, "completed")}>Complete</button>
                    )}
                    {(a.status === "completed" || a.status === "rejected") && (
                      <span style={{ color: "#6b7280" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer />
    </div>
  );
}
