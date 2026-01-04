import { useEffect, useState } from "react";
import API from "../../api/axios";
import AdminSidebar from "../admin/AdminSidebar";
import "./AdminUsers.css";
import Footer from "../../components/common/Footer";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data.users || []);
    } catch (err) {
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-main">
        <h2>All Users</h2>

        {loading && <p>Loading...</p>}
        {!loading && users.length === 0 && <p>No users found</p>}

        {!loading && users.length > 0 && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>{u.fullName}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || "—"}</td>
                  <td>
                    <span className="role-badge">{u.role}</span>
                  </td>
                  <td>
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer/>
    </div>
  );
}
