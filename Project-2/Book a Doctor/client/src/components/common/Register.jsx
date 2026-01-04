import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "user", // default role
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/user/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="app-layout">
      <Navbar />

      <div className="page-content register-container">
        <div className="register-card">
          <h2>Create Account</h2>
          <p className="subtitle">Sign up to book your doctor appointments</p>

          <form onSubmit={submit}>
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            {/* Role Selection */}
            <div className="role-selection">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={form.role === "user"}
                  onChange={handleChange}
                />
                User
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={form.role === "admin"}
                  onChange={handleChange}
                />
                Admin
              </label>
            </div>

            <button type="submit">Register</button>

            <p className="auth-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
