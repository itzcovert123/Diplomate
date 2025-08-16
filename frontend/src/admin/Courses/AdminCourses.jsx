import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import "./admincourses.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = [
  "🌐 Web Development",
  "📱 App Development",
  "🎮 Game Development",
  "📊 Data Science",
  "🧠 Artificial Intelligence",
];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();

      // Reset fields
      setImage("");
      setTitle("");
      setDescription("");
      setDuration("");
      setImagePrev("");
      setCreatedBy("");
      setPrice("");
      setCategory("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      setBtnLoading(false);
    }
  };

  return (
    <Layout>
      <div className="admin-courses">
        {/* Left Section - Course List */}
        <div className="left">
          <h1>📚 All Courses</h1>
          <div className="dashboard-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => (
                <CourseCard key={e._id} course={e} className="course-card" />
              ))
            ) : (
              <p>No Courses Yet</p>
            )}
          </div>
        </div>

        {/* Right Section - Add Course Form */}
        <div className="right">
          <div className="add-course">
            <div className="course-form">
              <h2>➕ Add New Course</h2>
              <form onSubmit={submitHandler}>
                <label htmlFor="title">📘 Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g. Master React in 30 Days"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="description">📝 Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="e.g. Complete React Bootcamp"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <label htmlFor="price">💰 Price (₹)</label>
                <input
                  type="number"
                  id="price"
                  placeholder="e.g. 499"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <label htmlFor="createdBy">👨‍🏫 Created By</label>
                <input
                  type="text"
                  id="createdBy"
                  placeholder="e.g. John Doe"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <label htmlFor="category">📂 Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">🚀 Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="duration">⏱️ Duration (Hours)</label>
                <input
                  type="number"
                  id="duration"
                  placeholder="e.g. 10"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

                <label htmlFor="image">🖼️ Upload Thumbnail</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={changeImageHandler}
                  required
                />
                {imagePrev && (
                  <img src={imagePrev} alt="Preview" width={300} />
                )}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "⏳ Please Wait..." : "✅ Add Course"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
