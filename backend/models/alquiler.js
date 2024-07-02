const mongoose = require('mongoose');
const {Schema} = mongoose;

const AlquilerSchema = new Schema({
    propietarioId: { type: Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    localId: { type: Schema.Types.ObjectId, ref: 'Locales', required: true },
    plazomes: { type: Number, required: true },
    costoalquiler: { type: Number, required: true },
    fechaAlquiler: { type: Date, required: true }
  }, { versionKey: false });

module.exports = mongoose.models.Alquiler || mongoose.model('Alquileres', AlquilerSchema);
