// import React, { useState } from "react";
// import useLogin from "@/hooks/UseLogin";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

// const styles = {
//   container: {
//     display: "flex",
//     height: "100vh",
//   },
//   leftSide: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     padding: "40px",
//     boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
//     position: "relative" as "relative",
//   },
//   rightSide: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//   },
//   image: {
//     width: "80%",
//     maxWidth: "600px",
//     height: "auto",
//     maxHeight: "90vh",
//     borderRadius: "15px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: "450px",
//     padding: "30px",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "#fff",
//     position: "relative" as "relative",
//   },
//   logo: {
//     position: "absolute" as "absolute",
//     top: "20px",
//     left: "20px",
//     width: "50px",
//     height: "auto",
//   },
//   title: {
//     margin: "0 0 20px 0",
//     fontSize: "24px",
//     color: "#333",
//     textAlign: "center" as "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column" as "column",
//   },
//   fieldContainer: {
//     position: "relative" as "relative",
//     marginBottom: "15px",
//   },
//   inputContainer: {
//     display: "flex",
//     alignItems: "center",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     padding: "0 10px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//   },
//   icon: {
//     color: "#0078d4",
//     marginRight: "10px",
//   },
//   button: {
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     backgroundColor: "#0078d4",
//     color: "#fff",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   buttonHover: {
//     backgroundColor: "#005a9e",
//   },
//   links: {
//     display: "flex",
//     flexDirection: "column" as "column",
//     alignItems: "center",
//     marginTop: "15px",
//   },
//   link: {
//     color: "#0078d4",
//     textDecoration: "none",
//     margin: "5px 0",
//   },
//   rememberMeContainer: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "15px",
//   },
//   rememberMeCheckbox: {
//     marginRight: "10px",
//   },
//   rememberMeLabel: {
//     color: "#333",
//   },
//   selectRole: {
//     width: "100%",
//     padding: "15px",
//     paddingLeft: 26, // Apply padding only on the left
//     marginBottom: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   adminButton: {
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// const LoginPage: React.FC = () => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     showPassword,
//     togglePasswordVisibility,
//     handleSubmit,
//     error,
//     success,
//   } = useLogin();

//   const [role, setRole] = useState(""); // New state for the role
//   const navigate = useNavigate(); // Use navigate hook

//   // Handle redirection after showing success message
//   React.useEffect(() => {
//     if (success) {
//       localStorage.setItem("isLoggedIn", "true");
//       alert('User logged in successfully');
//       setTimeout(() => {
//         navigate('/'); // Navigate to the home page after 3 seconds
//       }, 3000);
//     }
//   }, [success, navigate]);

//   const handleAdminRedirect = () => {
//     // Redirect to the admin login page when the button is clicked
//     navigate('/admin');
//   };

//   return (
//     <div style={styles.container} className="flex-col md:flex-row">
//       <div style={styles.leftSide}>
//         <div
//           style={styles.formContainer}
//           className="flex flex-col justify-center"
//         >
//           <img
//             src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png"
//             alt="Logo"
//             style={styles.logo}
//           />
//           <h1 style={styles.title}>Log In</h1>
//           {error && (
//             <p style={{ color: "red", textAlign: "center" }}>{error}</p>
//           )}
//           {success && (
//             <p style={{ color: "green", textAlign: "center" }}>
//               Login successful! Redirecting to homepage...
//             </p>
//           )}
//           <form style={styles.form}>
//             <div style={styles.fieldContainer}>
//               <div style={styles.inputContainer}>
//                 <i className="fas fa-envelope" style={styles.icon}></i>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   style={styles.input}
//                   required
//                 />
//               </div>
//             </div>

//             <div style={styles.fieldContainer}>
//               <div style={styles.inputContainer}>
//                 <i className="fas fa-lock" style={styles.icon}></i>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   style={styles.input}
//                   required
//                 />
//                 <i
//                   className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
//                   style={styles.icon}
//                   onClick={togglePasswordVisibility}
//                 ></i>
//               </div>
//             </div>

//             {/* Dropdown for role selection */}
//             <div style={styles.fieldContainer}>
//               <select
//                 style={styles.selectRole}
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="College Admin">College Admin</option>
//                 <option value="Society Head">Society Head</option>
//                 <option value="Student">Student</option>
//                 <option value="College Faculty">College Faculty</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               style={styles.button}
//               onClick={(e) => handleSubmit(e)}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   styles.buttonHover.backgroundColor)
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   styles.button.backgroundColor)
//               }
//             >
//               Login
//             </button>


//             {/* Conditional text and button for admin panel access */}
//             {(role === "College Admin" || role === "Society Head") && (
//               <div className="mt-10">
//                 <p className="text-gray-700">
//                   Want to explore more? Visit Admin Panel for our website...
//                 </p>
//                 <button
//                   className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transform duration-300 ease-in-out hover:scale-105"
//                   onClick={handleAdminRedirect}
//                 >
//                   Admin Panel
//                 </button>
//               </div>
//             )}
            

//             <div style={styles.links}>
//               <Link to="/signup" style={styles.link}>
//                 Don’t have an account? Create one!
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div style={styles.rightSide}>
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/027/205/841/original/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-3d-illustration-png.png"
//           alt="Login Background"
//           style={styles.image}
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useEffect } from "react";
import useLogin from "@/hooks/UseLogin";
import { Link, useNavigate, useLocation } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative" as "relative",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "80%",
    maxWidth: "600px",
    height: "auto",
    maxHeight: "90vh",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formContainer: {
    width: "100%",
    maxWidth: "450px",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    position: "relative" as "relative",
  },
  logo: {
    position: "absolute" as "absolute",
    top: "20px",
    left: "20px",
    width: "50px",
    height: "auto",
  },
  title: {
    margin: "0 0 20px 0",
    fontSize: "24px",
    color: "#333",
    textAlign: "center" as "center",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
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
    marginTop: "15px",
  },
  link: {
    color: "#0078d4",
    textDecoration: "none",
    margin: "5px 0",
  },
  rememberMeContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  rememberMeCheckbox: {
    marginRight: "10px",
  },
  rememberMeLabel: {
    color: "#333",
  },
  selectRole: {
    width: "100%",
    padding: "15px",
    paddingLeft: 26,
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  adminButton: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const LoginPage: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    error,
    success,
  } = useLogin();

  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulating storing an auth token
    localStorage.setItem("authToken", "your-auth-token");

    const redirectTo = location.state?.from || "/";
    navigate(redirectTo);
  };

  useEffect(() => {
    if (success) {
      localStorage.setItem("isLoggedIn", "true");
      // Using a toast notification or alert to inform the user
      alert("User logged in successfully");
      setTimeout(() => {
        navigate("/"); // Navigate to the home page after 2 seconds
      }, 2000);
    }
  }, [success, navigate]);

  const handleAdminRedirect = () => {
    navigate("/admin");
  };

  return (
    <div style={styles.container} className="flex-col md:flex-row">
      <div style={styles.leftSide}>
        <div style={styles.formContainer} className="flex flex-col justify-center">
          <img
            src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png"
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>Log In</h1>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          {success && <p style={{ color: "green", textAlign: "center" }}>Login successful! Redirecting to homepage...</p>}
          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-envelope" style={styles.icon}></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={styles.input}
                  required
                  aria-label="Email"
                />
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <div style={styles.inputContainer}>
                <i className="fas fa-lock" style={styles.icon}></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={styles.input}
                  required
                  aria-label="Password"
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  style={styles.icon}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <div style={styles.fieldContainer}>
              <select
                style={styles.selectRole}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                aria-label="Select Role"
              >
                <option value="">Select Role</option>
                <option value="College Admin">College Admin</option>
                <option value="Society Head">Society Head</option>
                <option value="Student">Student</option>
                <option value="College Faculty">College Faculty</option>
              </select>
            </div>

            <button
              type="submit"
              style={styles.button}
              onClick={(e) => handleSubmit(e)}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
              aria-label="Login Button"
            >
              Login
            </button>

            {(role === "College Admin" || role === "Society Head") && (
              <div className="mt-10">
                <p className="text-gray-700">Want to explore more? Visit Admin Panel for our website...</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transform duration-300 ease-in-out hover:scale-105"
                  onClick={handleAdminRedirect}
                >
                  Admin Panel
                </button>
              </div>
            )}

            <div style={styles.links}>
              <Link to="/signup" style={styles.link}>
                Don’t have an account? Create one!
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div style={styles.rightSide}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/205/841/original/login-and-password-concept-3d-illustration-computer-and-account-login-and-password-form-page-on-screen-3d-illustration-png.png"
          alt="Login Background"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default LoginPage;


