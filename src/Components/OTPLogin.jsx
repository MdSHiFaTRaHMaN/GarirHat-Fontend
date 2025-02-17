import { useEffect, useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebaseConfig";

const OTPLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Initialize Recaptcha
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved", response);
        },
        "expired-callback": () => {
          console.error("reCAPTCHA expired. Refresh the page and try again.");
        },
      });
      window.recaptchaVerifier.render(); // Ensure it's rendered
    }
  };
  useEffect(() => {
    setupRecaptcha();
  }, []);  

  const resetRecaptcha = () => {
    document.getElementById("recaptcha-container").innerHTML = ""; // Clear container
    window.recaptchaVerifier = null;
  };

  // Step 1: Send OTP
  const sendOTP = async () => {
    setError("");
    setSuccess("");
  
    try {
      if (!phone.startsWith("+")) {
        return setError("Phone number must include country code (e.g., +1, +880).");
      }
  
      resetRecaptcha(); // Clear any existing reCAPTCHA
      setupRecaptcha(); // Initialize a new one
  
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setSuccess("OTP sent successfully!");
    } catch (error) {
      setError(error.message);
    }
  };
  
  // Step 2: Verify OTP
  const verifyOTP = async () => {
    setError("");
    setSuccess("");
    try {
      if (!confirmationResult) return setError("Please request an OTP first.");
      await confirmationResult.confirm(otp);
      setSuccess("Phone number verified successfully!");
    } catch (error) {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-md w-80 mx-auto mt-10" id="recaptcha-container">
      <h2 className="text-xl font-semibold">Firebase OTP Login</h2>

      <input
        type="text"
        placeholder="Enter Phone Number (e.g., +8801XXXXXXXXX)"
        className="p-2 border rounded w-full"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOTP} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        className="p-2 border rounded w-full"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOTP} className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Verify OTP
      </button>

      <div id="recaptcha-container"></div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
    </div>
  );
};

export default OTPLogin;
