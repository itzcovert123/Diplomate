import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses-page">
      <h2 className="courses-heading">🚀 Available Courses at DiploGuide</h2>

      <div className="course-list-container">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="no-courses">No Courses Yet! 🚧</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
