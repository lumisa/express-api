const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    formaPago_description: {
        type: String,
        required: false,
        },
    plazos:{
        type: mongoose.ObjectId,
        required: false,
        },
    documentacion:{
        type: mongoose.ObjectId,
        required: false,
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

module.exports = mongoose.model('FormaPago', schema)