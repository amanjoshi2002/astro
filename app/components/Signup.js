"use client";

import Image from "next/image";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    timeOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log("Registering with:", formData);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(227, 68, 0, 0.8),
          rgba(247, 108, 40, 0.8),
          rgba(247, 108, 40, 0.8)
        )`,
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/center.svg')",
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.16,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Logo */}
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="mb-8 z-10"
      />

      {/* Signup Form */}
      <div
        className="p-6 shadow-lg w-full max-w-2xl z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">User Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["firstName", "email", "password", "confirmPassword", "gender", "dateOfBirth", "placeOfBirth", "timeOfBirth"].map((field) => (
            <input
              key={field}
              type={field.includes("password") ? "password" : "text"}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1").toUpperCase()}
              value={formData[field]}
              onChange={handleChange}
              className="p-2 w-full text-white"
              style={{
                background: "transparent",
                borderRadius: "0",
                border: "2px solid #FFF",
                color: "rgba(255, 255, 255, 1)",
              }}
            />
          ))}
        </div>
        <button
          onClick={handleRegister}
          className="w-full mt-4 py-2 text-white"
          style={{
            background: "linear-gradient(90deg, rgba(255, 138, 60, 0.64) 0%, #E34400 100%)",
            borderRadius: "26px",
            border: "2px solid #FFF",
          }}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Signup; 