import { useState, FormEvent } from "react";
import axios from "@/AxiosWrapper";
const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      setSuccess("Login successful!");
      setError("");
      // Redirect or handle success as needed
      // window.location.href = '/dashboard';
    } catch (error) {
      setError("Failed to log in. Please try again.");
      setSuccess("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
