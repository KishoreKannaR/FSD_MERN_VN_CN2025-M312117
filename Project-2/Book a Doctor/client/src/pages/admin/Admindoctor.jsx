import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../admin/AdminSidebar";
import "./AdminDoctors.css";
import Footer from "../../components/common/Footer";

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/admin/doctors");
      setDoctors(res.data.doctors || []);
    } catch (err) {
      alert("Failed to load doctors");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (doctorId, status) => {
    try {
      await API.post("/admin/update-doctor-status", {
        doctorId,
        status,
      });
      fetchDoctors();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-main">
        <h2>Doctors</h2>

        {loading && <p>Loading...</p>}
        {!loading && doctors.length === 0 && <p>No doctors found</p>}

        {!loading && doctors.length > 0 && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Fees</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((d) => (
                <tr key={d._id}>
                  <td>{d.fullName}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>{d.specialization}</td>
                  <td>{d.experience}</td>
                  <td>₹{d.fees}</td>
                  <td>
                    <span className="status-text">{d.status}</span>
                  </td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(d._id, "approved")}
                      disabled={d.status === "approved"}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(d._id, "rejected")}
                      disabled={d.status === "rejected"}
                    >
                      Reject
                    </button>
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
