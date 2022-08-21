const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    bonificacion_description: {
        type: mongoose.ObjectId,
        required: true,
    },
    presentacionDate: Date,
    formulario: String,
    opportunity_id: mongoose.ObjectId,
    bonificacion_amount: String,
    tramite_number: String,
    municipio: String,
    url_municipio: String,
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    title: String,
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

module.exports = mongoose.model('Bonificación', schema)