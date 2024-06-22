const Local = require('../models/local');
const localCtrl = {}
//Obtener todos los locales.Probado.
localCtrl.getLocales = async (req, res) => {
    var locales = await Local.find();
    res.json(locales);
}

//Obtener local por Id. Probado.
localCtrl.getLocalById = async (req, res) => {
    const local = await Local.findById(req.params.id);
    res.json(local);
}

//Crear local. Probado.
localCtrl.createLocal = async (req, res) => {
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
    try{
        await Local.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
           'message': 'Local eliminado'
        })

    }catch (error){
        console.log(error);
        res.status(400).json({
            'status': '0',
           'message': 'Error. No se pudo eliminar el local'
        })
    }
}

module.exports = localCtrl;