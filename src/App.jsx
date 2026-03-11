import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import CreateListing from "./CreateListing.jsx"; // import the new component

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
        <Route path="/create-listing" element={<CreateListing />} />
      </Routes>
    </Router>
  );
}

export default App;