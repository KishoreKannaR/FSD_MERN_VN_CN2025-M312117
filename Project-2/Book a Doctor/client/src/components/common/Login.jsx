import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import API from "../../api/axios";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      const res = await API.post("/user/login", {
        email: form.email.value,
        password: form.password.value,
      });

      localStorage.setItem("token", res.data.token);

      const { role, isdoctor } = res.data.user;

      if (role === "admin") navigate("/admin");
      else if (role === "user" && isdoctor) navigate("/doctor");
      else navigate("/user");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-layout">
      <Navbar />

      <div className="page-content login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue booking doctors</p>

          <form onSubmit={submit}>
            <input
              name="email"
              placeholder="Email address"
              type="email"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="auth-link">
              Don’t have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
