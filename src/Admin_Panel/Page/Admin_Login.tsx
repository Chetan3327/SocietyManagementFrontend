import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
// import axios, { AxiosResponse } from "axios";

const technicalSocieties = [
  { society: "nameSpace", SocietyID: 1 },
  { society: "Hash Define", SocietyID: 2 },
  { society: "Anveshan", SocietyID: 3 },
  { society: "WIBD", SocietyID: 4 },
  { society: "GDSC", SocietyID: 5 },
  { society: "IEEE", SocietyID: 6 },
  { society: "IEEE_WIE", SocietyID: 7 },
  { society: "Electronauts", SocietyID: 8 },
];

const nonTechnicalSocieties = [
  { society: "Avaran", SocietyID: 9 },
  { society: "Chromavita", SocietyID: 10 },
  { society: "Drishti", SocietyID: 11 },
  { society: "Kalam", SocietyID: 12 },
  { society: "Mavericks", SocietyID: 13 },
  { society: "Octave", SocietyID: 14 },
  { society: "Opticlick", SocietyID: 15 },
  { society: "Panache", SocietyID: 16 },
];

const adminOption = { society: "College Admin", SocietyID: 0 };
const allSocieties = [...technicalSocieties, ...nonTechnicalSocieties, adminOption];

const societyPasswords: { [key: number]: string } = {
  0: "adminPass2024",   // COLLEGE ADMIN PASSWORD
  1: "namespacePass123",
  2: "hashdefinePass456",
  3: "anveshanPass789",
  4: "wibdPassABC",
  5: "gdscPassDEF",
  6: "ieeePassGHI",
  7: "ieeewiePassJKL",
  8: "electronautsPassMNO",
  9: "avaranPassPQR",
  10: "chromavitaPassSTU",
  11: "drishtiPassVWX",
  12: "kalamPassYZA",
  13: "mavericksPassBCD",
  14: "octavePassEFG",
  15: "opticlickPassHIJ",
  16: "panachePassKLM",
};

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
    const [selectedSocietyID, setSelectedSocietyID] = useState<string>(""); // Keep it as a string to handle "0" properly
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const navigate = useNavigate();
    const [role, setRole] = useState<string>("");
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setSuccess("");
      setError("");
  
      if (selectedSocietyID === "") {
        setError("Please select a society.");
        return;
      }
  
      const societyID = Number(selectedSocietyID); // Convert selectedSocietyID back to a number for comparison
      const correctPassword = societyPasswords[societyID];
  
      if (password === correctPassword) {
        if (societyID === 0 && role === "College Admin") {
          navigate(`/admin/home`);
        } 
        else if(societyID === 0 && role === "Society Head"){
          setError("Invalid role. Please select a valid role.");
        } else if (role === "Society Head") {
          navigate(`/admin/home/${societyID}`);
        } else {
          setError("Invalid role. Please select a valid role.");
        }
      } else {
        setError("Incorrect password. Please try again.");
      }
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <div style={styles.formWrapper}>
            <h1 style={styles.title}>Log In</h1>
            {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
            {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}
  
            <form style={styles.form} onSubmit={handleSubmit}>
              {/* Society Dropdown */}
              <div style={styles.fieldContainer}>
                <div style={styles.inputContainer}>
                  <select
                    value={selectedSocietyID}
                    onChange={(e) => setSelectedSocietyID(e.target.value)}
                    required
                    style={styles.input}
                  >
                    <option value="">Select your society</option>
                    {allSocieties.map((society) => (
                      <option key={society.SocietyID} value={society.SocietyID.toString()}>
                        {society.society}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
  
              {/* Password Field */}
              <div style={styles.fieldContainer}>
                <div style={styles.inputContainer}>
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
  
              {/* Role Selector */}
              <div style={styles.fieldContainer}>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  style={styles.input}
                >
                  <option value="">Select your role</option>
                  <option value="Society Head">Society Head</option>
                  <option value="College Admin">College Admin</option>
                </select>
              </div>
  
              <button type="submit" style={styles.button}>
                Log In
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
    );
  };
  
  export default Admin_Login;