import { useEffect, useState } from "react";
import API from "../../api/axios";
import UserSidebar from "../user/UserSidebar";
import "./UserDashboard.css";
import Footer from "../common/Footer";

export default function UserDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
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
        const res = await API.get("/user/appointments");
        if (res.data.success) {
          const activeAppointments = res.data.appointments.filter(
            (a) => a.status !== "completed" && a.status !== "cancelled"
          );
          setAppointments(activeAppointments);
        }
      } catch (error) {
        console.error("Failed to fetch appointments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
    fetchAppointments();
  }, []);

  return (
    <div className="user-dashboard">
      <UserSidebar />

      <div className="dashboard-content">
        <h2 className="welcome-text">Hi, {user?.fullName || "User"}</h2>
        <h3 className="section-title">My Active Appointments</h3>

        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : appointments.length === 0 ? (
          <p className="no-data">No active appointments</p>
        ) : (
          appointments.map((a) => (
            <div key={a._id} className="appointment-card">
              <p><strong>Doctor:</strong> {a.doctorId?.fullName}</p>
              <p><strong>Specialization:</strong> {a.doctorId?.specialization}</p>
              <p><strong>Contact:</strong> {a.doctorId?.email} | {a.doctorId?.phone}</p>
              <p><strong>Date:</strong> {new Date(a.date).toLocaleDateString()} | <strong>Time:</strong> {a.time}</p>
              <p><strong>Status:</strong> {a.status}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}
