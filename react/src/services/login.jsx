import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      setAccessToken(response.data.access); // store access token
      setError("");
      alert("Login successful! Access token received.");
      console.log("Access Token:", response.data.access);

    } catch (err) {
      setError("Invalid username or password");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {accessToken && (
        <div style={{ marginTop: "20px" }}>
          <h4>Access Token:</h4>
          <p style={{ wordBreak: "break-all" }}>{accessToken}</p>
        </div>
      )}
    </div>
  );
}

export default Login;

const fetchStudents = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/students/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("Students:", res.data);
    alert("Check console for students list!");
  } catch (err) {
    console.error(err);
    alert("Failed to fetch students.");
  }
};


{accessToken && (
  <div style={{ marginTop: "20px" }}>
    <h4>Access Token:</h4>
    <p style={{ wordBreak: "break-all" }}>{accessToken}</p>
    <button onClick={fetchStudents} style={{ marginTop: "10px" }}>
      Get Students
    </button>
  </div>
)}
