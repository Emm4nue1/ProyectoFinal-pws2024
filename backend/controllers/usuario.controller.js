const Usuario = require('../models/usuario');
const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async (req, res) => {
    var usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) => {
    var usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.json({
           'status': '1',
           'message': 'Usuario guardado.'
        });
    } catch (error) {
        console.log(error);
        res.status({
           'status': '0',
           'message': 'Error al guardar el usuario.'
        });
    }
}

usuarioCtrl.getUsuario = async (req, res) => {
    var usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtrl.updateUsuario = async (req, res) => {
    var vusuario = new Usuario(req.body);
    try {
        await Usuario.updateOne({_id: req.body._id }, vusuario);
        res.json({
           'status': '1',
           'message': 'Usuario actualizado'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al actualizar el usuario'
        });
    }
}

usuarioCtrl.deleteUsuario = async (req, res) => {
    try{
        await Usuario.deleteOne({_id: req.params.id});
        res.json({
           'status': '1',
           'message': 'Usuario eliminado'
        });
    } catch(error){
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al eliminar el usuario'
        });
    }
}

module.exports = usuarioCtrl;