const Local = require('../models/local');
const localCtrl = {}
const Usuario = require('../models/usuario');

//Obtener todos los locales.Probado.
// localCtrl.getLocales = async (req, res) => {
//     var locales = await Local.find({ usuario: req.usuario_id });
//     res.json(locales);
// }

localCtrl.getLocales = async (req, res) => {
    try {

        //CRISTIAN
        //let filter = { usuario: req.usuario_id };
        let filter = { };

        // Filtro para habilitado
        if (req.query.habilitado != null ) {
            filter.habilitado = req.query.habilitado === 'true';
        }

        // Filtro para alquilado
        if (req.query.alquilado != null) {
            filter.alquilado = req.query.alquilado === 'true';
        }

        const locales = await Local.find(filter).populate("usuario");
        res.json(locales);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'message': 'Error al obtener los locales'
        });
    }
};

//Obtener local por Id. Probado.
localCtrl.getLocalById = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
}

//Crear local. Probado.
localCtrl.createLocal = async (req, res) => {
    console.log(req);
    var local = new Local(req.body)
    try {
        await local.save();
        res.json({
            'status': '1',
            'message': 'Local creado'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'No se pudo guardar el local'
        })
    }
}

//Modificar un local. Probado.
localCtrl.updateLocal = async (req, res) => {
    const vlocal = new Local(req.body);
    try {
        await Local.updateOne({ _id: req.body._id }, vlocal);
        res.json({
            'status': '1',
            'message': 'registro de Local actualizado'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'Error, no se pudo actualizar el local'
        })
    }
}

//Eliminar un local. Probado.
localCtrl.deleteLocal = async (req, res) => {
    try {
        await Local.deleteOne({ _id: req.params.id });
        res.json({
            'status': '1',
            'message': 'Local eliminado'
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'Error. No se pudo eliminar el local'
        })
    }
}

module.exports = localCtrl;