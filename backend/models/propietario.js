const mongoose = require('mongoose');
const {Schema} = mongoose;

const PropietarioSchema = new Schema({
    apellido: {type: String, required: true},
    nombres: {type: String, required: true},
    dni: {type: Number, required: true},
    email: {type: String, required: true},
    telefono: {type: Number, required: true}
},{ versionKey: false })

module.exports = mongoose.models.Propietario || mongoose.model('Propietario', PropietarioSchema);