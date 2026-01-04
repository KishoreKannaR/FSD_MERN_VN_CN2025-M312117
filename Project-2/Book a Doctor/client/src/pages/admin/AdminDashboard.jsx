import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../admin/AdminSidebar";
import "./AdminDashboard.css";
import Footer from "../../components/common/Footer";

export default function AdminDashboard() {
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
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.error("Failed to fetch user profile");
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/admin/appointments");
      setAppointments(res.data.appointments || []);
    } catch (err) {
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-main">
        <h2>Hi, {user?.fullName || "User"}</h2>
        <h2>All Appointments</h2>

        {loading && <p>Loading...</p>}
        {!loading && appointments.length === 0 && (
          <p>No appointments found</p>
        )}

        {!loading && appointments.length > 0 && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Specialization</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a._id}>
                  <td>{a.userName}</td>
                  <td>{a.userEmail}</td>
                  <td>{a.userPhone}</td>
                  <td>{a.doctorName}</td>
                  <td>{a.doctorSpecialization}</td>
                  <td>{new Date(a.date).toLocaleDateString()}</td>
                  <td>{a.time}</td>
                  <td>
                    <span className={`status ${a.status}`}>
                      {a.status}
                    </span>
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
