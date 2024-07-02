const mongoose = require ('mongoose');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    LocalId: { type: Schema.Types.ObjectId, ref: 'Locales', required: true },
    usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    texto: { type: String, required: true },
    estado: { type: String, enum: ['Pendiente', 'Procesado'], required: true }
  }, { versionKey: false });

module.exports = mongoose.models.Novedad || mongoose.model('Novedades', NovedadSchema);