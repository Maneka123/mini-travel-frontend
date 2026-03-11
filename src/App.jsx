// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard!</h1>
      <p>You are now logged in.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/">Register</Link> | <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;