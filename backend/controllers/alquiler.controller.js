const Alquiler = require('../models/alquiler');
const alquilerCtrl = {}

alquilerCtrl.getAlquileres = async (req, res) => {
    var alquileres = await Alquiler.find().populate(["propietario", "local"]);
    res.json(alquileres);
}

alquilerCtrl.getAlquilerById = async (req, res) => {
    const alquiler = await Alquiler.findById(req.params.id).populate(["propietario", "local"]);
    res.json(alquiler);
}

alquilerCtrl.createAlquiler = async (req, res) => {
    var alquiler = new Alquiler(req.body)
    try {
        await alquiler.save();
        res.json({
            'status': '1',
            'message': 'Se registró Alquiler'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'No se pudo registrar el alquiler'
        })
    }
}

alquilerCtrl.updateAlquiler = async (req, res) => {
    const valquiler = new Alquiler(req.body);
    try {
        await Alquiler.updateOne({ _id: req.body._id }, valquiler);
        res.json({
            'status': '1',
            'message': 'registro de Alquiler actualizado'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            'status': '0',
            'message': 'Error, no se pudo actualizar el alquiler'
        })
    }
}

alquilerCtrl.deleteAlquiler = async (req, res) => {
    try{
        await Alquiler.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
           'message': 'Alquiler eliminado'
        })

    }catch (error){
        console.log(error);
        res.status(400).json({
            'status': '0',
           'message': 'Error. No se pudo eliminar el alquiler'
        })
    }
}

module.exports = alquilerCtrl;