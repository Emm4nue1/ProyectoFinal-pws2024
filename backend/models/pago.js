const mongoose = require('mongoose');
const {Schema} = mongoose;

const PagoSchema = new Schema({
  alquilerId: { type: Schema.Types.ObjectId, ref: 'Alquileres', required: true },
  monto: { type: Number, required: true },
  fechaPago: { type: Date, required: true },
  medioPago: { type: String, enum: ['Efectivo', 'Tarjeta', 'MercadoPago'], required: true },
  estadoPago: { type: String, enum: ['Pendiente', 'Saldado'] },
  mesPago: { type: Number, require: true },
  adelantos: [{
    montoPago: { type: Number },
    medioPago: { type: String, enum: ['Efectivo', 'Tarjeta', 'MercadoPago'], required: true },
    fechaAdelanto: { type: Date }
  }]
}, { versionKey: false });

module.exports = mongoose.models.Pago || mongoose.model('Pagos', PagoSchema);