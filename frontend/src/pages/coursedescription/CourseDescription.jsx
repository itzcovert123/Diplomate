import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { fetchUser } = UserData();
  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const {
        data: { order },
      } = await axios.post(
        `${server}/api/course/checkout/${params.id}`,
        {},
        { headers: { token } }
      );

      const options = {
        key: "rzp_test_arAMeObFiYnfju",
        amount: order.id,
        currency: "INR",
        name: "SANGEETA SHARMA",
        description: "Learn with us",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          try {
            const { data } = await axios.post(
              `${server}/api/verification/${params.id}`,
              {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              },
              { headers: { token } }
            );

            await fetchUser();
            await fetchCourses();
            await fetchMyCourse();
            toast.success(data.message);
            navigate(`/payment-success/${razorpay_payment_id}`);
          } catch (error) {
            toast.error(error.response.data.message);
          }
          setLoading(false);
        },
        theme: { color: "#6a11cb" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Payment initiation failed");
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    course && (
      <div className="course-description">
        <div className="course-header">
          <img src={`${server}/${course.image}`} alt="course" className="course-image" />
          <div className="course-info">
            <h2>📚 {course.title}</h2>
            <p>👨‍🏫 <strong>Instructor:</strong> {course.createdBy}</p>
            <p>⏳ <strong>Duration:</strong> {course.duration} weeks</p>
          </div>
        </div>

        <div className="course-body">
          <p className="description-text">📝 {course.description}</p>
          <p className="course-price">💸 Enroll now for just <span>₹{course.price}</span></p>

          {user && user.subscription.includes(course._id) ? (
            <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">
              🚀 Start Learning
            </button>
          ) : (
            <button onClick={checkoutHandler} className="common-btn">
              🔐 Buy Now
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default CourseDescription;
