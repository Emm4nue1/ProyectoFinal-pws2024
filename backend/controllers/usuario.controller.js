const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find().populate("rol");
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'message': 'Error al obtener los usuarios'
        });
    }
};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(201).json({
            'status': '1',
            'message': 'Usuario guardado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'message': 'Error al guardar el usuario.'
        });
    }
};

usuarioCtrl.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({
                'status': '0',
                'message': 'Usuario no encontrado'
            });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'message': 'Error al obtener el usuario'
        });
    }
};

usuarioCtrl.updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUsuario) {
            return res.status(404).json({
                'status': '0',
                'message': 'Usuario no encontrado'
            });
        }
        res.json({
            'status': '1',
            'message': 'Usuario actualizado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'message': 'Error al actualizar el usuario'
        });
    }
};

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        const deletedUsuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!deletedUsuario) {
            return res.status(404).json({
                'status': '0',
                'message': 'Usuario no encontrado'
            });
        }
        res.json({
            'status': '1',
            'message': 'Usuario eliminado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'message': 'Error al eliminar el usuario'
        });
    }
};

usuarioCtrl.loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {
      const usuario = await Usuario.findOne({ email });
      if (!usuario) {
        return res.status(404).json({
          status: '0',
          message: 'Usuario no encontrado'
        });
      }
  
      const esContraseñaValida = await bcrypt.compare(password, usuario.password);
      if (!esContraseñaValida) {
        return res.status(401).json({
          status: '0',
          message: 'Contraseña inválida'
        });
      }
  
      res.json({
        status: '1',
        message: 'Inicio de sesión exitoso',
        user : usuario
      });
    } catch (error) {
      res.status(500).json({
        status: '0',
        message: 'Error al iniciar sesión'
      });
    }
  };

module.exports = usuarioCtrl;