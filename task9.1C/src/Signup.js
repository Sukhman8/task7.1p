// src/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! Redirecting to login...");
      window.location.href = "/login";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white", 
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          width: "350px",
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Sign Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            backgroundColor: "#4b6cb7",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>

        <p style={{ marginTop: "15px", color: "#555" }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#4b6cb7",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
