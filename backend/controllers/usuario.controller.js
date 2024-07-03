const Usuario = require('../models/usuario');
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

// usuarioCtrl.getPropietarios = async (req, res) => {
//     try {
//         const propietarios = await Usuario.find({ perfil: 'Propietario' });
//         res.json(propietarios);
//     } catch (error) {
//         res.status(500).json({
//             'status': '0',
//             'message': 'Error al obtener los propietarios'
//         });
//     }
// };

// usuarioCtrl.getAdministrativos = async (req, res) => {
//     try {
//         const administrativos = await Usuario.find({ perfil: 'Administrativo' });
//         res.json(administrativos);
//     } catch (error) {
//         res.status(500).json({
//             'status': '0',
//             'message': 'Error al obtener los administrativos'
//         });
//     }
// };
// //trae al dueño/s
// usuarioCtrl.getTitular = async (req, res) => {
//     try {
//         const titular = await Usuario.find({ perfil: 'Dueño' });
//         res.json(titular);
//     } catch (error) {
//         res.status(500).json({
//             'status': '0',
//             'message': 'Error al obtener los propietarios'
//         });
//     }
// };

module.exports = usuarioCtrl;