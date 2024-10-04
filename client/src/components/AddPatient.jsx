import React, { useState, useEffect } from "react";
import axios from "axios";

function AddPatient() {
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    therapyId: "",
    therapistId: "",
    bookingType: "",
    payment: "",
    dailyActivities: "",
  });

  const [therapies, setTherapies] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch Therapies and Therapists when component mounts
  useEffect(() => {
    const fetchTherapies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/therapies", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add JWT token
          },
        });
        setTherapies(response.data);
      } catch (error) {
        console.error("Error fetching therapies:", error);
      }
    };

    const fetchTherapists = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/therapists", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add JWT token
          },
        });
        setTherapists(response.data);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      }
    };

    fetchTherapies();
    fetchTherapists();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:3001/api/add-patient", patientData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response)
      setSuccessMessage("Patient added successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Error adding patient");
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Add New Patient</h2>

        {/* Success and Error Messages */}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={patientData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={patientData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={patientData.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={patientData.age}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Therapy ID Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Therapy</label>
            <select
              name="therapyId"
              value={patientData.therapyId}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Therapy</option>
              {therapies.map((therapy) => (
                <option key={therapy._id} value={therapy._id}>
                  {therapy.name} (Plan: {therapy.plan.length})
                </option>
              ))}
            </select>
          </div>

          {/* Therapist Name Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Therapist</label>
            <select
              name="therapistId"
              value={patientData.therapistId}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Therapist</option>
              {therapists.map((therapist) => (
                <option key={therapist._id} value={therapist._id}>
                  {therapist.name}
                </option>
              ))}
            </select>
          </div>

          {/* Booking Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Booking Type</label>
            <select
              name="bookingType"
              value={patientData.bookingType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Booking Type</option>
              <option value="Online">Online</option>
              <option value="In-person">In-person</option>
            </select>
          </div>

          {/* Payment */}
          <div className="mb-4">
            <label className="block text-gray-700">Payment</label>
            <input
              type="number"
              name="payment"
              value={patientData.payment}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Daily Activities */}
          <div className="mb-4">
            <label className="block text-gray-700">Daily Activities</label>
            <textarea
              name="dailyActivities"
              value={patientData.dailyActivities}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg"
          >
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatient;
