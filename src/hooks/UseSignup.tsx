import { useState } from "react";
 import axios from "@/AxiosWrapper";
const useSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post("/signup", { name, email, password });
      setSuccess("Signup successful!");
      setError("");
      // Redirect or handle success as needed
      // window.location.href = '/login';
    } catch (error) {
      setError("Failed to sign up. Please try again.");
      setSuccess("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    termsAccepted,
    setTermsAccepted,
    handleSubmit,
    error,
    success,
  };
};

export default useSignup;
