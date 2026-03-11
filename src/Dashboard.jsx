import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard!</h1>
      <p>You are now logged in.</p>

      {/* Link to Create Listing page */}
      <Link to="/create-listing">
        <button className="create-listing-btn">Create a New Listing</button>
      </Link>
    </div>
  );
}

export default Dashboard;