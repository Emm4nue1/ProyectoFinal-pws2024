const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Rol = require ('./rol');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true },
  password: { type: String, required: true },
  activo: { type: Boolean, required: true },
  rol: {type: Schema.Types.ObjectId, ref: Rol, required: true}
}, { versionKey: false });

UsuarioSchema.pre('save', async function (siguiente) {
  const usuario = this;
  if (!usuario.isModified('password')) return siguiente();
  try {
    const cifrado = await bcrypt.genSalt(5);
    usuario.password = await bcrypt.hash(usuario.password, cifrado);
    return siguiente();
  } catch (error) {
    return siguiente(error);
  }
});

module.exports = mongoose.models.Usuario || mongoose.model('Usuarios', UsuarioSchema);