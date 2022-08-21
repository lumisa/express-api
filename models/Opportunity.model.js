const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    title: String,
    description: String,
    source: String,
    closing_date: {
        type: Date,
    },
    probability: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    account_id: {
        type: mongoose.ObjectId,
        required: true,
    },
    stage_id: mongoose.ObjectId,
    opportunity_type_id: {
        type: mongoose.ObjectId,
        required: false,
    },
    installer: String,
    engineer: String,
    formaPago_id: mongoose.ObjectId,
    tramites: [
        new mongoose.Schema ({tramite_title: String, tramite_description: String, date: Date, done: Boolean})
    ]

}, { timestamps: true,

toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v

    }
}})

module.exports = mongoose.model('Opportunity', schema)