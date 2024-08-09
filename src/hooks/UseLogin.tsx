import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://societybackend-go.onrender.com/login",
        {
          Email: email,
          Password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setSuccess("Login successful!");
      setError("");
      console.log(response.data);
      // Handle successful login (e.g., save token, redirect, etc.)
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      setSuccess("");
      console.error(err);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    error,
    success,
  };
};

export default useLogin;
