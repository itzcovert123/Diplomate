import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState({});

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.error("⚠️ Failed to fetch stats:", error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="main-content">
        <h1 className="dashboard-title">📊 Admin Dashboard Overview</h1>
        <div className="dashboard-grid">
          <div className="box">
            <p>📚 Total Courses</p>
            <p>{stats.totalCoures || 0}</p>
          </div>
          <div className="box">
            <p>🎥 Total Lectures</p>
            <p>{stats.totalLectures || 0}</p>
          </div>
          <div className="box">
            <p>👥 Total Users</p>
            <p>{stats.totalUsers || 0}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
