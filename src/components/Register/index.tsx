import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface User {
  username: string;
  password: string;
  token: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = () => {
    if (!username || !password) {
      // Check if username and password are provided
      alert("Please enter both username and password");
      return;
    }

    const newUser: User = {
      username,
      password,
      token: `token_${username}`, // generate tokens
    };

    let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Registered user:", newUser);
    console.log("All users:", users);

    // Display a confirmation popup
    alert("Successfully registered!");

    // Navigate to login page after registration
    router.push("/login");
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>User Register</h1>
        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <button onClick={handleRegister} className="register-button">
            Register
          </button>
        </div>
        <p>
          Already have an account?
          <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
