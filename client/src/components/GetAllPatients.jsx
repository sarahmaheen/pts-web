import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllPatients = () => {
  const [parents, setParents] = useState([]);
  const [error, setError] = useState("");

  // Fetch parents when the component mounts
  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("https://pts-web.onrender.com/api/allpatients", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the JWT token
          },
        });
        setParents(response.data);
      } catch (error) {
        setError("Error fetching parents data.");
        console.error("Error fetching parents:", error);
      }
    };

    fetchParents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Parent List</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {parents.map((parent) => (
          <div
            key={parent._id}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold">{parent.name}</h2>
            <p className="text-gray-600">Email: {parent.email}</p>
            <p className="text-gray-600">Age: {parent.age}</p>
            <p className="text-gray-600">
              Therapist: {parent.therapistName ? parent.therapistName.name : 'N/A'}
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllPatients;
