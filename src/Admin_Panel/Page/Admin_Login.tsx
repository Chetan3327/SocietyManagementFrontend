import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const styles = {
    container: {
      display: "flex",
      height: "100vh",
    },
    leftSide: {
      flex: "1",
      display: "flex",
      flexDirection: "column" as 'column',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "20px",
      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    },
    rightSide: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
    },
    image: {
      maxWidth: "80%",
      maxHeight: "80%",
      borderRadius: "15px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    formWrapper: {
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      position: "relative" as "relative",
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
    },
    logo: {
      position: "absolute" as "absolute",
      top: "10px",
      left: "10px",
      width: "50px",
      height: "50px",
      objectFit: "contain" as "contain",
    },
    title: {
      margin: "0",
      fontSize: "24px",
      color: "#333",
      textAlign: "center" as "center",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column" as "column",
      width: "100%",
    },
    fieldContainer: {
      position: "relative" as "relative",
      marginBottom: "15px",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "0 10px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
    },
    icon: {
      color: "#0078d4",
      marginRight: "10px",
    },
    button: {
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#0078d4",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#005a9e",
    },
    links: {
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
    },
    link: {
      color: "#0078d4",
      textDecoration: "none",
      marginTop: "10px",
    },
    message: {
      textAlign: "center" as "center",
      marginBottom: "20px",
    },
    error: {
      color: "red",
    },
    success: {
      color: "green",
    },
  };
  
  const Admin_Login: React.FC = () => {
    const [userName , setUserName] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
      };

      return (
        <>
         
            <div style={styles.container} className="flex-col md:flex-row">
              <div style={styles.leftSide}>
                <div style={styles.formWrapper}>
                  <img
                    src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" // Replace with your logo URL
                    alt="Logo"
                    style={styles.logo}
                  />
                  <h1 style={styles.title}>Sign Up</h1>
    
                  {error && (
                    <p style={{ ...styles.message, ...styles.error }}>{error}</p>
                  )}
                  {success && (
                    <p style={{ ...styles.message, ...styles.success }}>
                      {success}
                    </p>
                  )}
    
                  <form style={styles.form}>
                    <div style={styles.fieldContainer}>
                      <div style={styles.inputContainer}>
                        <i className="fas fa-user" style={styles.icon}></i>
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Enter your user name"
                          style={styles.input}
                          required
                        />
                      </div>
                    </div>
    
                    <div style={styles.fieldContainer}>
                      <div style={styles.inputContainer}>
                        <i className="fas fa-lock" style={styles.icon}></i>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          style={styles.input}
                          required
                        />
                      </div>
                    </div>
    
                    <button
                      type="submit"
                      style={styles.button}
                      onClick={handleSubmit}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          styles.buttonHover.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          styles.button.backgroundColor)
                      }
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
              <div style={styles.rightSide}>
                <img
                  src="https://img.freepik.com/premium-vector/3d-account-login-password-form_165488-4522.jpg"
                  alt="Signup Background"
                  style={styles.image}
                />
              </div>
            </div>
        
        </>
      );
  }

  export default Admin_Login