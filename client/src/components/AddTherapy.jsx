// import React, { useState } from 'react';
// import axios from 'axios';

// const AddTherapy = () => {
//   const [therapyName, setTherapyName] = useState('');
//   const [therapistIds, setTherapistIds] = useState('');
//   const [plans, setPlans] = useState([{ goals: '', observations: '', duration: '', mode: '' }]);

//   const handlePlanChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedPlans = plans.map((plan, i) => 
//       i === index ? { ...plan, [name]: value } : plan
//     );
//     setPlans(updatedPlans);
//   };

//   const addDay = () => {
//     setPlans([...plans, { goals: '', observations: '', duration: '', mode: '' }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const therapistIdsArray = therapistIds.split(',').map(id => id.trim());
//       const response = await axios.post('http://localhost:3001/api/add-therapy', {
//         therapyName,
//         therapistIds: therapistIdsArray,
//         plan: plans,
//       });
//       alert('Therapy added successfully');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error adding therapy:', error);
//       alert('Failed to add therapy');
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Add New Therapy</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Therapy Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Therapy Name</label>
//           <input 
//             type="text" 
//             value={therapyName} 
//             onChange={(e) => setTherapyName(e.target.value)}
//             required 
//             className="border rounded p-2 w-full"
//           />
//         </div>

//         {/* Therapist IDs */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Therapist IDs (comma-separated)</label>
//           <input 
//             type="text" 
//             value={therapistIds} 
//             onChange={(e) => setTherapistIds(e.target.value)} 
//             required 
//             className="border rounded p-2 w-full"
//           />
//         </div>

//         {/* Plan Days */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Therapy Plan</h3>
//           {plans.map((plan, index) => (
//             <div key={index} className="mb-4 p-4 border rounded-md">
//               <h4 className="font-bold">Day {index + 1}</h4>
//               <label className="block text-gray-700">Goals</label>
//               <input
//                 type="text"
//                 name="goals"
//                 value={plan.goals}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Observations</label>
//               <input
//                 type="text"
//                 name="observations"
//                 value={plan.observations}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Duration (minutes)</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={plan.duration}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Mode (e.g., in-person, online)</label>
//               <input
//                 type="text"
//                 name="mode"
//                 value={plan.mode}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add Day Button */}
//         <button type="button" onClick={addDay} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Another Day
//         </button>

//         {/* Submit Button */}
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
//           Submit Therapy
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTherapy;









































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddTherapy = () => {
//   const [therapyName, setTherapyName] = useState('');
//   const [therapistIds, setTherapistIds] = useState([]);
//   const [plans, setPlans] = useState([{ goals: '', observations: '', duration: '', mode: '' }]);
//   const [therapists, setTherapists] = useState([]);

//   // Fetch therapists on component mount
//   useEffect(() => {
//     const fetchTherapists = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/therapists');
//         setTherapists(response.data);
//       } catch (error) {
//         console.error('Error fetching therapists:', error);
//       }
//     };
//     fetchTherapists();
//   }, []);

//   const handlePlanChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedPlans = plans.map((plan, i) =>
//       i === index ? { ...plan, [name]: value } : plan
//     );
//     setPlans(updatedPlans);
//   };

//   const addDay = () => {
//     setPlans([...plans, { goals: '', observations: '', duration: '', mode: '' }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/add-therapy', {
//         therapyName,
//         therapistIds,
//         plan: plans,
//       });
//       alert('Therapy added successfully');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error adding therapy:', error);
//       alert('Failed to add therapy');
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Add New Therapy</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Therapy Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Therapy Name</label>
//           <input 
//             type="text" 
//             value={therapyName} 
//             onChange={(e) => setTherapyName(e.target.value)}
//             required 
//             className="border rounded p-2 w-full"
//           />
//         </div>

//         {/* Therapist Dropdown */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Select Therapists</label>
//           <select 
//             multiple
//             value={therapistIds} 
//             onChange={(e) => setTherapistIds([...e.target.selectedOptions].map(option => option.value))}
//             required
//             className="border rounded p-2 w-full"
//           >
//             {therapists.map(therapist => (
//               <option key={therapist._id} value={therapist._id}>
//                 {therapist.name} - {therapist.specialization}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Plan Days */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Therapy Plan</h3>
//           {plans.map((plan, index) => (
//             <div key={index} className="mb-4 p-4 border rounded-md">
//               <h4 className="font-bold">Day {index + 1}</h4>
//               <label className="block text-gray-700">Goals</label>
//               <input
//                 type="text"
//                 name="goals"
//                 value={plan.goals}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Observations</label>
//               <input
//                 type="text"
//                 name="observations"
//                 value={plan.observations}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Duration (minutes)</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={plan.duration}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Mode (e.g., in-person, online)</label>
//               <input
//                 type="text"
//                 name="mode"
//                 value={plan.mode}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add Day Button */}
//         <button type="button" onClick={addDay} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Another Day
//         </button>

//         {/* Submit Button */}
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
//           Submit Therapy
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTherapy;

































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddTherapy = () => {
//   const [therapyName, setTherapyName] = useState('');
//   const [therapistIds, setTherapistIds] = useState([]);
//   const [plans, setPlans] = useState([{ goals: '', observations: '', duration: '', mode: '' }]);
//   const [therapists, setTherapists] = useState([]);

//   // Fetch therapists on component mount
//   useEffect(() => {
//     const fetchTherapists = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/therapists');
//         setTherapists(response.data);
//       } catch (error) {
//         console.error('Error fetching therapists:', error);
//       }
//     };
//     fetchTherapists();
//   }, []);

//   const handlePlanChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedPlans = plans.map((plan, i) =>
//       i === index ? { ...plan, [name]: value } : plan
//     );
//     setPlans(updatedPlans);
//   };

//   const addDay = () => {
//     setPlans([...plans, { goals: '', observations: '', duration: '', mode: '' }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/api/add-therapy', {
//         therapyName,
//         therapistIds,
//         plan: plans,
//       });

//       console.log(response)
//       alert('Therapy added successfully');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error adding therapy:', error);
//       alert('Failed to add therapy');
//     }
//   };

//   const handleTherapistChange = (id) => {
//     setTherapistIds((prevIds) => 
//       prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
//     );
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Add New Therapy</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Therapy Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Therapy Name</label>
//           <input 
//             type="text" 
//             value={therapyName} 
//             onChange={(e) => setTherapyName(e.target.value)}
//             required 
//             className="border rounded p-2 w-full"
//           />
//         </div>

//         {/* Therapist Options */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Select Therapists</label>
//           <div className="flex flex-col">
//             {therapists.map(therapist => (
//               <label key={therapist._id} className="flex items-center mb-2">
//                 <input 
//                   type="checkbox" 
//                   value={therapist._id} 
//                   checked={therapistIds.includes(therapist._id)} 
//                   onChange={() => handleTherapistChange(therapist._id)} 
//                   className="mr-2"
//                 />
//                 {therapist.name} - {therapist.specialization}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Plan Days */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Therapy Plan</h3>
//           {plans.map((plan, index) => (
//             <div key={index} className="mb-4 p-4 border rounded-md">
//               <h4 className="font-bold">Day {index + 1}</h4>
//               <label className="block text-gray-700">Goals</label>
//               <input
//                 type="text"
//                 name="goals"
//                 value={plan.goals}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Observations</label>
//               <input
//                 type="text"
//                 name="observations"
//                 value={plan.observations}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Duration (minutes)</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={plan.duration}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full mb-2"
//               />
//               <label className="block text-gray-700">Mode (e.g., in-person, online)</label>
//               <input
//                 type="text"
//                 name="mode"
//                 value={plan.mode}
//                 onChange={(e) => handlePlanChange(index, e)}
//                 required
//                 className="border rounded p-2 w-full"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add Day Button */}
//         <button type="button" onClick={addDay} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Another Day
//         </button>

//         {/* Submit Button */}
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
//           Submit Therapy
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTherapy;










































    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const AddTherapy = () => {
        const [therapyName, setTherapyName] = useState('');
        const [therapistIds, setTherapistIds] = useState([]);
        const [plans, setPlans] = useState([{ goals: '', observations: '', duration: '', mode: '' }]);
        const [therapists, setTherapists] = useState([]);

        // Fetch therapists on component mount
        useEffect(() => {
            const fetchTherapists = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/api/therapists');
                    setTherapists(response.data);
                } catch (error) {
                    console.error('Error fetching therapists:', error);
                }
            };
            fetchTherapists();
        }, []);

        const handlePlanChange = (index, event) => {
            const { name, value } = event.target;
            const updatedPlans = plans.map((plan, i) =>
                i === index ? { ...plan, [name]: value } : plan
            );
            setPlans(updatedPlans);
        };

        const addDay = () => {
            setPlans([...plans, { goals: '', observations: '', duration: '', mode: '' }]);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const formattedPlans = plans.map(plan => ({
                    goals: plan.goals,
                    observations: plan.observations,
                    duration: plan.duration,
                    mode: plan.mode
                }));
                // console.log(formattedPlans.goals)
                console.log( therapyName,
                    therapistIds, // Sending the array of therapist IDs
                    formattedPlans) // Sending the formatted plans)
                const response = await axios.post('http://localhost:3001/api/add-therapy', {
                    therapyName,
                    therapistIds, // Sending the array of therapist IDs
                    plan: formattedPlans // Sending the formatted plans
                });

                console.log(response);
                alert('Therapy added successfully');
            } catch (error) {
                console.error('Error adding therapy:', error);
                alert(error.response.data.message)
                // alert('Failed to add therapy');
            }
        };

        const handleTherapistChange = (id) => {
            setTherapistIds((prevIds) => 
                prevIds.includes(id) ? prevIds.filter((prevId) => prevId !== id) : [...prevIds, id]
            );
        };

        return (
            <div className="p-4 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Add New Therapy</h2>
                <form onSubmit={handleSubmit}>
                    {/* Therapy Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Therapy Name</label>
                        <input 
                            type="text" 
                            value={therapyName} 
                            onChange={(e) => setTherapyName(e.target.value)}
                            required 
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    {/* Therapist Options */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Select Therapists</label>
                        <div className="flex flex-col">
                            {therapists.map(therapist => (
                                <label key={therapist._id} className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        value={therapist._id} 
                                        checked={therapistIds.includes(therapist._id)} 
                                        onChange={() => handleTherapistChange(therapist._id)} 
                                        className="mr-2"
                                    />
                                    {therapist.name} - {therapist.specialization}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Plan Days */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Therapy Plan</h3>
                        {plans.map((plan, index) => (
                            <div key={index} className="mb-4 p-4 border rounded-md">
                                <h4 className="font-bold">Day {index + 1}</h4>
                                <label className="block text-gray-700">Goals</label>
                                <input
                                    type="text"
                                    name="goals"
                                    value={plan.goals}
                                    onChange={(e) => handlePlanChange(index, e)}
                                    required
                                    className="border rounded p-2 w-full mb-2"
                                />
                                <label className="block text-gray-700">Observations</label>
                                <input
                                    type="text"
                                    name="observations"
                                    value={plan.observations}
                                    onChange={(e) => handlePlanChange(index, e)}
                                    required
                                    className="border rounded p-2 w-full mb-2"
                                />
                                <label className="block text-gray-700">Duration (minutes)</label>
                                <input
                                    type="text"
                                    name="duration"
                                    value={plan.duration}
                                    onChange={(e) => handlePlanChange(index, e)}
                                    required
                                    className="border rounded p-2 w-full mb-2"
                                />
                                <label className="block text-gray-700">Mode (e.g., in-person, online)</label>
                                <input
                                    type="text"
                                    name="mode"
                                    value={plan.mode}
                                    onChange={(e) => handlePlanChange(index, e)}
                                    required
                                    className="border rounded p-2 w-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Add Day Button */}
                    <button type="button" onClick={addDay} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add Another Day
                    </button>

                    {/* Submit Button */}
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                        Submit Therapy
                    </button>
                </form>
            </div>
        );
    };

    export default AddTherapy;
