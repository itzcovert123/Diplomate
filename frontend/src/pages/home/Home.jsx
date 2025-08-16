import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import learningAnimation from "../../assets/learning.json";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to DiploGuide</h1>
          <div className="hero-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Empowering Students with Quality Education 🎓",
                  "Affordable, Accessible, and AI-powered Learning 💡",
                  "Guiding Every Diploma Dream Step-by-Step 📘"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          <button onClick={() => navigate("/courses")} className="hero-btn">
            Get Started
          </button>
        </div>
        {/* Lottie Animation */}
        <div className="hero-animation">
          <Lottie animationData={learningAnimation} loop={true} />
        </div>
      </div>

      {/* Typing Animation Below Hero */}
      <div className="typing-heading">
        <Typewriter
          options={{
            strings: [
              "All Diploma Courses in One Place",
              "Interactive Notes, PYQs, and AI Help",
              "Built for Students, by Students"
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h2>📚 Comprehensive Study Materials</h2>
          <p>
            Access curriculum-based notes, PYQs, and interactive learning
            modules.
          </p>
        </div>
        <div className="feature-card">
          <h2>🤖 AI Chatbot Assistance</h2>
          <p>Instantly resolve doubts with our integrated AI-powered chatbot.</p>
        </div>
        <div className="feature-card">
          <h2>👨‍🏫 All Diploma Courses</h2>
          <p>Ask queries directly to chatbots and get expert guidance.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
