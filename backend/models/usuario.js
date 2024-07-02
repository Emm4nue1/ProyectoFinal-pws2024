const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para la colección Roles
const RolesSchema = new Schema({
  nombre: { type: String, required: true }
}, { versionKey: false });

// Esquema para la colección Usuarios
const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true },
  password: { type: String, required: true },
  activo: { type: Boolean, required: true },
  rolesId: { type: Schema.Types.ObjectId, ref: 'Roles', required: true }
}, { versionKey: false });

module.exports = mongoose.models.Usuario || mongoose.model('Usuarios', UsuarioSchema);
module.exports = mongoose.models.Rol || mongoose.model('Roles', RolesSchema);