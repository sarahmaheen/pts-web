import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    goals: {
        type: String,
        required: true,
    },
    observations: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true, // duration in minutes
    },
    mode: {
        type: String,
        required: true, // e.g., 'in-person' or 'online'
    },
});

const therapySchema = new mongoose.Schema({
    therapyName: {
        type: String,
        required: true,
    },
    therapistIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Therapist',
            // required: true,
        },
    ],
    plan: [planSchema],
});

const Therapy = mongoose.model('Therapy', therapySchema);

export default Therapy;
