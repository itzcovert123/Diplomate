import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
      navigate("/");
    }
    fetchCourse(params.id);
  }, []);

  return (
    <>
      {course && (
        <div className="course-study-page">
          <div className="course-card animate-slide-in">
            <img src={`${server}/${course.image}`} alt="course" className="course-study-image" />
            <div className="course-study-content">
              <h2 className="course-title">📘 {course.title}</h2>
              <p className="course-description">📝 {course.description}</p>
              <p className="course-instructor">👨‍🏫 by <strong>{course.createdBy}</strong></p>
              <p className="course-duration">⏱ Duration: {course.duration} weeks</p>
              <Link to={`/lectures/${course._id}`} className="lecture-link">
                🎥 Go to Lectures
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
