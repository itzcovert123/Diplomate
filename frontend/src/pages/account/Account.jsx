import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./account.css";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="account-wrapper">
      {user && (
        <div className="profile-card">
          <div className="avatar">
            <FaUserCircle />
          </div>
          <h2 className="profile-heading">Welcome, {user.name} 👋</h2>

          <div className="profile-info">
            <p><strong>📛 Name:</strong> {user.name}</p>
            <p><strong>📧 Email:</strong> {user.email}</p>

            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="glow-button"
            >
              <MdDashboard />
              &nbsp; My Dashboard
            </button>

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="glow-button admin-btn"
              >
                <MdDashboard />
                &nbsp; Admin Panel
              </button>
            )}

            <button
              onClick={logoutHandler}
              className="glow-button logout-btn"
            >
              <IoMdLogOut />
              &nbsp; Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
