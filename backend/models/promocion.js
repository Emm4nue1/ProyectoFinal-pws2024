const mongoose = require ('mongoose');
const {Schema} = mongoose;

const PromocionSchema = new Schema({
    LocalId: { type: Schema.Types.ObjectId, ref: 'Locales', required: true },
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true }
  }, { versionKey: false });

module.exports = mongoose.models.Promocion || mongoose.model('Promociones', PromocionSchema);