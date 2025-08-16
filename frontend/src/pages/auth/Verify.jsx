import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const onCaptchaChange = (value) => {
    console.log("Captcha:", value);
    setCaptchaVerified(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!captchaVerified) return;
    await verifyOtp(Number(otp), navigate);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler}>
          <label>Enter OTP</label>
          <input type="number" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onCaptchaChange} />
          {captchaVerified && (
            <button className="common-btn" disabled={btnLoading}>
              {btnLoading ? <span className="loader"></span> : "Verify"}
            </button>
          )}
        </form>
        <p>Go to <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Verify;
