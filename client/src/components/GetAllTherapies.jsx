import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetAllTherapies = () => {
    const [therapies, setTherapies] = useState([]);
    // const history = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTherapies = async () => {
            try {
                const response = await axios.get('https://pts-web.onrender.com/api/therapies');
                setTherapies(response.data);
            } catch (error) {
                console.error('Error fetching therapies:', error);
            }
        };

        fetchTherapies();
    }, []);

    const handleCardClick = (therapyId) => {
        navigate(`/therapies/${therapyId}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Available Therapies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {therapies.map((therapy) => (
                    <div
                        key={therapy._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
                        onClick={() => handleCardClick(therapy._id)}
                    >
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Name: {therapy.therapyName}</h2>
                            <p className="text-black-600">Duration Days: {therapy.plan.length} </p>
                            <h3 className="text-md font-medium mt-2">Therapists:</h3>
                            <ul className="list-disc pl-5">
                                {therapy.therapistIds.map((therapist) => (
                                    <li key={therapist._id} className="text-gray-700">
                                        {therapist.name} {/* Change this to the actual field name in your Therapist model */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetAllTherapies;
