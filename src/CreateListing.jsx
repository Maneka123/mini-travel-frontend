import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://mini-travel-experience-listing-plat-omega.vercel.app/api/CreateListing";

function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    image: null, // store uploaded file
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("You must be logged in to create a listing.");
        return;
      }

      // Prepare multipart/form-data
      const data = new FormData();
      data.append("title", formData.title);
      data.append("location", formData.location);
      data.append("description", formData.description);
      data.append("price", formData.price);
      if (formData.image) data.append("image", formData.image);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: data,
      });

      const resData = await response.json();

      if (response.ok) {
        setMessage("Listing created successfully!");
        setFormData({ title: "", location: "", description: "", price: "", image: null });
      } else {
        setMessage(resData.error || "Failed to create listing");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="create-listing-container">
      <h2>Create a Travel Listing</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Create Listing</button>
      </form>

      {message && <p className="message">{message}</p>}

      <button
        onClick={() => navigate("/dashboard")}
        className="back-dashboard-btn"
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default CreateListing;