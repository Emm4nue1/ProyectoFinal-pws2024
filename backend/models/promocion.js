const mongoose = require ('mongoose');
const {Schema} = mongoose;
const Alquiler = require ('./alquiler')

const PromocionSchema = new Schema({
    alquiler: { type: Schema.Types.ObjectId, ref: Alquiler, required: true },
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true }
  }, { versionKey: false });

module.exports = mongoose.models.Promocion || mongoose.model('Promociones', PromocionSchema);