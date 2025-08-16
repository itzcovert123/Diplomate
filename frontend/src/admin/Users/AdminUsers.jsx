import React, { useEffect, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "superadmin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUsers(data.users);
    } catch (error) {
      console.error("⚠️ Failed to fetch users:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("⚠️ Are you sure you want to update this user's role?")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        toast.success("✅ " + data.message);
        fetchUsers();
      } catch (error) {
        toast.error("❌ " + error.response?.data?.message || "Error occurred");
      }
    }
  };

  return (
    <Layout>
      <div className="users">
        <h1 className="users-title">👥 All Registered Users</h1>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>#️⃣</th>
                <th>👤 Name</th>
                <th>📧 Email</th>
                <th>🛡️ Role</th>
                <th>🔁 Update Role</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((e, i) => (
                  <tr key={e._id}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>
                      <button
                        onClick={() => updateRole(e._id)}
                        className="common-btn"
                      >
                        🚀 Update Role
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminUsers;
