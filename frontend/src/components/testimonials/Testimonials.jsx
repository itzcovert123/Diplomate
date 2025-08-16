import React from "react";
import { motion } from "framer-motion";
import "./testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    position: "Diploma Student",
    message:
      "DiploGuide has transformed the way I study. The AI chatbot and interactive lessons make learning engaging and efficient!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sanya Verma",
    position: "Engineering Student",
    message:
      "I love how structured and well-organized the study materials are. It's a complete game-changer for my exam preparation.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Raj Malhotra",
    position: "IT Student",
    message:
      "The ability to interact with teachers directly has been the best feature. It’s like having a personal mentor 24/7!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    position: "Computer Science Student",
    message:
      "The PYQs and structured notes have saved me so much time. This platform is an absolute must for all diploma students.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonial-heading">What Our Students Say</h2>
      <motion.div
        className="carousel"
        animate={{ x: [0, -100 * testimonialsData.length + 100 + "%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {testimonialsData.map((e) => (
          <motion.div
            className="testimonial-card"
            key={e.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="testimonial-content">
              <div className="student-image">
                <img src={e.image} alt={e.name} />
              </div>
              <p className="message">“{e.message}”</p>
              <div className="info">
                <p className="name">{e.name}</p>
                <p className="position">{e.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
