import { useState } from "react";
import API from "../../api/axios";
import UserSidebar from "./UserSidebar";
import "./ApplyDoctor.css";
import Footer from "../common/Footer";

export default function ApplyDoctor() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialization: "",
    experience: "",
    fees: "",
    timings: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        timings: form.timings.split(",").map((t) => t.trim()),
      };

      const res = await API.post("/user/apply-doctor", payload);
      alert(res.data.message || "Applied successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Application failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-page">
      <UserSidebar />

      <div className="apply-main">
        <h2>Apply as Doctor</h2>

        <form className="apply-form" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required value={form.fullName} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" required value={form.phone} onChange={handleChange} />
          <textarea name="address" placeholder="Clinic / Hospital Address" required value={form.address} onChange={handleChange} />
          <input type="text" name="specialization" placeholder="Specialization" required value={form.specialization} onChange={handleChange} />
          <input type="text" name="experience" placeholder="Experience (years)" required value={form.experience} onChange={handleChange} />
          <input type="number" name="fees" placeholder="Consultation Fees" required value={form.fees} onChange={handleChange} />
          <input type="text" name="timings" placeholder="Timings (e.g. 09:00-12:00, 14:00-18:00)" required value={form.timings} onChange={handleChange} />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Apply"}
          </button>
        </form>
        <Footer />
      </div>

    </div>
  );
}
