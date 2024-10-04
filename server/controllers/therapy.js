import express from 'express';
import Therapy from '../models/TherapyModel.js';
import Therapist from '../models/Therapistmodel.js';
import verifyJWT from '../middleware/verifyToken.js';

const router = express.Router();

// Route to add a new therapy
router.post('/add-therapy', async (req, res) => {
    const { therapyName, therapistIds, plan } = req.body;
    console.log({ therapyName, therapistIds, plan})
    try {

        const existingTherapy = await Therapy.find({ therapyName });
        if (existingTherapy) {
            return res.status(409).json({ message: 'Therapy with this name already exists' });
        }


        // Verify that all therapist IDs exist
        const therapists = await Therapist.find({ _id: { $in: therapistIds } });
      console.log(therapistIds.length)

        if (therapistIds.length == 0) {
            return res.status(404).json({ message: 'Add therapists - Therapists not found' });
        }

        // Create a new therapy instance
        const newTherapy = new Therapy({
            therapyName,
            therapistIds, // Store the therapist Object IDs
            plan,
        });
        console.log(newTherapy);
        // Save the therapy to the database
        await newTherapy.save();

        // Respond with success message
        res.status(201).json({ message: 'Therapy added successfully', therapy: newTherapy });
    } catch (error) {
        console.error('Error adding therapy:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



router.get('/therapies', async (req, res) => {
    try {
        // Fetch all therapies from the database
        const therapies = await Therapy.find().populate('therapistIds'); // Populate therapist details if needed

        // Respond with the therapies
        res.status(200).json(therapies);
    } catch (error) {
        // Handle any errors
        console.error('Error fetching therapies:', error);
        res.status(500).json({ message: 'Error fetching therapies', error });
    }
});



router.delete('/delete-therapy/:id', verifyJWT, async (req, res) => {
    const therapyId = req.params.id;

    try {
        // Find the therapy by ID and delete it
        const deletedTherapy = await Therapy.findByIdAndDelete(therapyId);

        // Check if the therapy was found and deleted
        if (!deletedTherapy) {
            return res.status(404).json({ message: 'Therapy not found' });
        }

        // Respond with success message
        res.status(200).json({ message: 'Therapy deleted successfully', deletedTherapy });
    } catch (error) {
        console.error('Error deleting therapy:', error);
        res.status(500).json({ message: 'Server error' });
    }
});







router.put('/update-therapy/:id',  async (req, res) => {
    const therapyId = req.params.id;
    const { therapyName, therapistIds, plan } = req.body; // Extract fields to be updated

    try {
        // Verify that all therapist IDs exist
        if (therapistIds && therapistIds.length) {
            const therapists = await Therapist.find({ _id: { $in: therapistIds } });
            if (therapists.length !== therapistIds.length) {
                return res.status(404).json({ message: 'One or more therapists not found' });
            }
        }

        // Update the therapy using findByIdAndUpdate
        const updatedTherapy = await Therapy.findByIdAndUpdate(
            therapyId,
            { therapyName, therapistIds, plan },
            { new: true } // Options to return the updated document
        );

        // Check if the therapy was found and updated
        if (!updatedTherapy) {
            return res.status(404).json({ message: 'Therapy not found' });
        }

        // Respond with the updated therapy
        res.status(200).json({ message: 'Therapy updated successfully', therapy: updatedTherapy });
    } catch (error) {
        console.error('Error updating therapy:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
