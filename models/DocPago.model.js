const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    doc_description: {
        type: String,
        required: true,
        },
    doc_url: {
        type: String,
        required: true,
        },
}, 

{
    timestamps: true, toJSON: {
    transform: (doc, ret) => {
        ret.id = doc._id,
          delete ret._id,
          delete ret.__v
      }
    }
})

module.exports = mongoose.model('DocPago', schema)