"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
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

      {/* Login Form */}
      <div
        className="p-6 rounded-lg shadow-lg w-80 md:w-96 z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 mb-4 w-full text-white"
          style={{
            background: "linear-gradient(90deg, rgba(255, 138, 60, 0.64) 0%, #E34400 100%)",
            borderRadius: "26px",
            border: "5px solid #FFF",
            color: "rgba(255, 255, 255, 1)",
          }}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 w-full text-white"
          style={{
            background: "linear-gradient(90deg, rgba(255, 138, 60, 0.64) 0%, #E34400 100%)",
            borderRadius: "26px",
            border: "5px solid #FFF",
            color: "rgba(255, 255, 255, 1)",
          }}
        />
        <div className="flex justify-between mb-4 text-white">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#" className="text-blue-200">
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg text-white"
          style={{
            background: "linear-gradient(90deg, rgba(255, 138, 60, 0.64) 0%, #E34400 100%)",
            borderRadius: "26px",
            border: "5px solid #FFF",
          }}
        >
          LOGIN
        </button>
        <div className="mt-4 text-center text-white">
          <p>
            Dont have an account?{" "}
            <Link href="/signup" legacyBehavior>
              <a className="text-blue-200">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
