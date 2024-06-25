const mongoose = require ('mongoose');
const {Schema} = mongoose;
const Usuario = require ('./usuario')

const NovedadSchema = new Schema({
    usuario: {type: Schema.Types.ObjectId, ref: Usuario, required: true},
    texto: {type: String, required: true},
    estado: { type: String, required: true, enum: ['pendiente', 'procesado'] }
},{ versionKey: false })

module.exports = mongoose.models.Novedad || mongoose.model('Novedad', NovedadSchema);