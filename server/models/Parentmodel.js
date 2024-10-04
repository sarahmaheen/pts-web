import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    therapyName: {
        // type: String,
        // required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapy', // This references the Therapy model
        // required: true,
    },
    therapistName: { // This should hold the therapist's Object ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist',
        // required: true,
    },
    bookingType: {
        type: String,
        required: true,  // e.g., 'in-person' or 'online'
    },
    payment: {
        method: { type: String, required: true }, // e.g., credit card, insurance
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
    },
    dailyActivities: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;
