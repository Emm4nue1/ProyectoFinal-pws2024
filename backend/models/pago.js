const mongoose = require('mongoose');
const { Schema } = mongoose;
const Cuota = require ('./cuota');

const PagoSchema = new Schema({
  pago: { type: Schema.Types.ObjectId, ref: Cuota, required: true },
  importe: { type: Number, required: true },
  fechaPago: { type: Date, required: true },
  metodoPago: { type: Number, required: true }
});

module.exports = mongoose.models.Pago || mongoose.model('Pagos', PagoSchema);