import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import UserDashboard from "./components/user/UserDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import UserAppointment from "./components/user/UserAppointment";
import Applydoctor from "./components/user/Applydoctor";
import AdminUsers from "./pages/admin/Adminuser";
import Admindoctor from "./pages/admin/Admindoctor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Home Page */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/user/book-appointment"
          element={
            <PrivateRoute>
              <UserAppointment />
            </PrivateRoute>
          }
        />

        <Route
          path="/apply-doctor"
          element={
            <PrivateRoute>
              <Applydoctor />
            </PrivateRoute>
          }
        />

        <Route
          path="/doctor"
          element={
            <PrivateRoute>
              <DoctorDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
            }/>

            <Route
          path="/admin/users"
          element={
            <PrivateRoute>
              <AdminUsers />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/doctors"
          element={
            <PrivateRoute>
              <Admindoctor />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
