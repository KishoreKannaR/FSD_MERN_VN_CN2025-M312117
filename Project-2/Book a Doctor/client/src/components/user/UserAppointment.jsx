import { useEffect, useState } from "react";
import API from "../../api/axios";
import UserSidebar from "./UserSidebar";
import "./UserAppointment.css";
import Footer from "../common/Footer";

export default function UserAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await API.get("/user/getalldoctors");
        setDoctors(res.data.doctors || []);
      } catch (err) {
        alert("Failed to load doctors");
      } finally {
        setFetching(false);
      }
    };
    fetchDoctors();
  }, []);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
    setDate("");
    setTime("");
    setReason("");
    setDocument(null);
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    if (!date || !time || !reason) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("doctorId", selectedDoctor._id);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("reason", reason);
      if (document) formData.append("document", document);

      await API.post("/user/book-appointment", formData);
      alert("Appointment booked successfully");
      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-page">
      <UserSidebar />

      <div className="appointment-main">
        <h2>Book an Appointment</h2>

        {fetching && <p>Loading doctors...</p>}
        {!fetching && doctors.length === 0 && <p>No doctors available</p>}

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div key={doctor._id} className="doctor-card">
              <div>
                <h3>Dr. {doctor.fullName}</h3>
                <p><b>Specialization:</b> {doctor.specialization}</p>
                <p><b>Experience:</b> {doctor.experience} years</p>
                <p><b>Fees:</b> ₹{doctor.fees}</p>
                <hr />
                <p><b>Email:</b> {doctor.email}</p>
                <p><b>Phone:</b> {doctor.phone}</p>
                <p><b>Address:</b> {doctor.address}</p>
              </div>
              <button className="book-btn" onClick={() => openModal(doctor)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Book Appointment</h3>
            <p><b>Doctor:</b> Dr. {selectedDoctor.fullName}</p>

            <form onSubmit={bookAppointment}>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
              <textarea
                placeholder="Reason for appointment"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
              <input type="file" onChange={(e) => setDocument(e.target.files[0])} />

              <div className="modal-buttons">
                <button type="submit" className="confirm-btn">
                  {loading ? "Booking..." : "Confirm"}
                </button>
                <button type="button" className="cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
