const { required } = require('joi')
const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide company'],
        maxlength: 100,
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user'],
    },
    }, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)