// src/Dashboard.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Dashboard() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out successfully.");
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
          width: "400px",
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
          Welcome to Dev@Deakin 🎓
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "16px",
            marginBottom: "30px",
          }}
        >
          You are now logged in to your dashboard.
        </p>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            backgroundColor: "#4b6cb7",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
