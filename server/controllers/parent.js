// import express from 'express';
// import Parent from '../models/Parentmodel.js';
// import Therapist from '../models/Therapistmodel.js';

// const router = express.Router();

// // Route to add a new patient (parent)
// router.post('/add-patient', async (req, res) => {
//     const { name, email, password, age, therapyName, therapistName, bookingType, payment, dailyActivities } = req.body;

//     try {
//         // Find the therapist by name to get their Object ID
//         const therapist = await Therapist.findOne({ name: therapistName });
//         if (!therapist) {
//             return res.status(404).json({ message: 'Therapist not found' });
//         }

//         // Create a new parent (patient) instance
//         const newPatient = new Parent({
//             name,
//             email,
//             password, // Ensure you hash the password before saving
//             age,
//             therapyName,
//             therapistName: therapist._id, // Store the therapist's Object ID
//             bookingType,
//             payment,
//             dailyActivities
//         });

//         // Save the patient to the database
//         await newPatient.save();

//         // Update the therapist's patients array with the new patient's ID
//         therapist.patients.push(newPatient._id); // Add new patient's ID to the patients array
//         await therapist.save(); // Save the updated therapist document

//         // Respond with success message
//         res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
//     } catch (error) {
//         console.error('Error adding patient:', error);
//         if (error.code === 11000) {
//             return res.status(400).json({ message: 'Email already exists' });
//         }
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// export default router;















import express from 'express';
import Parent from '../models/Parentmodel.js';
import Therapist from '../models/Therapistmodel.js';
import Therapy from '../models/TherapyModel.js'; // Import the Therapy model
import verifyJWT from '../middleware/verifyToken.js';

const router = express.Router();

// Route to add a new patient (parent)
router.post('/add-patient',verifyJWT, async (req, res) => {
    const { name, email, password, age, therapyId, therapistName, bookingType, payment, dailyActivities } = req.body;

    try {
        // Find the therapist by name to get their Object ID
        const therapist = await Therapist.findOne({ name: therapistName });
        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }

        // Find the therapy by ID to ensure it exists
        const therapy = await Therapy.findById(therapyId);
        if (!therapy) {
            return res.status(404).json({ message: 'Therapy not found' });
        }

        // Create a new parent (patient) instance
        const newPatient = new Parent({
            name,
            email,
            password, // Ensure you hash the password before saving
            age,
            therapyId, // Store the therapy's Object ID
            therapistId: therapist._id, // Store the therapist's Object ID
            bookingType,
            payment,
            dailyActivities
        });

        // Save the patient to the database
        await newPatient.save();

        // Update the therapist's patients array with the new patient's ID
        therapist.patients.push(newPatient._id); // Add new patient's ID to the patients array
        await therapist.save(); // Save the updated therapist document

        // Respond with success message
        res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
    } catch (error) {
        console.error('Error adding patient:', error);
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});



router.get('/allpatients', async (req, res) => {
    try {
        // Find all parent documents and populate the therapist details
        const parents = await Parent.find()
            .populate('therapistName'); // Populating therapist details based on ObjectId

        res.status(200).json(parents); // Return the list of parents along with therapist data
    } catch (error) {
        res.status(500).json({ message: 'Error fetching parents', error });
    }
});


export default router;
