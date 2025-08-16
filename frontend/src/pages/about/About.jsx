import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Welcome to DiploGuide</h1>
        <p>Your partner in online learning excellence.</p>
      </div>

      <div className="about-section">
        <h2>🌟 Our Mission</h2>
        <p>
          At <strong>DiploGuide</strong>, we believe education should be
          accessible, engaging, and practical. Our mission is to empower
          learners with industry-relevant skills through interactive,
          easy-to-follow online courses led by experienced educators.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 What We Offer</h2>
        <ul>
          <li>📘 Career-focused online diplomas & certifications</li>
          <li>👩‍🏫 Mentorship from domain experts</li>
          <li>🛠️ Hands-on projects & case studies</li>
          <li>⏱️ Learn at your own pace – anytime, anywhere</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>👥 Meet the Team</h2>
        <p>
          We are a passionate group of educators, developers, and designers with
          a love for simplifying learning. From curriculum planning to platform
          design, everything is built with our learners in mind.
        </p>
      </div>
    </div>
  );
};

export default About;
