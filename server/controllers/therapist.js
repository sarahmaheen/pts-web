import express from 'express';
import Therapist from '../models/Therapistmodel.js'; // Adjust the path based on your project structure
import verifyJWT from '../middleware/verifyToken.js';

const router = express.Router();

// Route to add a new therapist
router.post('/add-therapist',verifyJWT, async (req, res) => {
    const { name, email, phone, specialization, experience, licenseNumber } = req.body;

    try {
        // Create a new therapist instance
        const newTherapist = new Therapist({
            name,
            email,
            phone,
            specialization,
            experience,
            licenseNumber,
        });

        // Save the therapist to the database
        await newTherapist.save();

        // Respond with success message
        res.status(201).json({ message: 'Therapist added successfully', therapist: newTherapist });
    } catch (error) {
        console.error('Error adding therapist:', error);
        // Check for specific validation errors
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email or License Number already exists' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});




router.get('/therapists', async (req, res) => {
    try {
        // Find all therapists and populate the patient details (from the Parent model)
        const therapists = await Therapist.find()
            .populate('patients'); // Populates patient details from the Parent model

        res.status(200).json(therapists); // Return therapist details including patients
    } catch (error) {
        res.status(500).json({ message: 'Error fetching therapists', error });
    }
});

export default router;
