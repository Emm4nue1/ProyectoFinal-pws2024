const Propietario = require ('../models/propietario');
const propietarioCtrl = {}

propietarioCtrl.getPropietarios = async (req, res) => {
    var propietarios = await Propietario.find();
    res.json(propietarios);
}

propietarioCtrl.createPropietario = async (req, res) => {
    var propietario = new Propietario(req.body);
    try {
        await propietario.save();
        res.json({
           'status': '1',
           'message': 'Propietario creado'
        });
    } catch (error) {
        console.log(error);
        res.status({
           'status': '0',
           'message': 'Error al crear el propietario'
        });
    }
}

propietarioCtrl.getPropietario = async (req, res) => {
    var propietario = await Propietario.findById(req.params.id);
    res.json(propietario);
}

propietarioCtrl.updatePropietario = async (req, res) => {
    var vpropietario = new Propietario(req.body);
    try {
        await Propietario.updateOne({_id: req.body._id}, vpropietario);
        res.json({
           'status': '1',
           'message': 'Propietario actualizado'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al actualizar el propietario'
        });
    }
}

propietarioCtrl.deletePropietario = async (req, res) => {
    try{
        await Propietario.deleteOne({_id: req.params.id});
        res.json({
           'status': '1',
           'message': 'Propietario eliminado'
        });
    } catch(error){
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al eliminar el propietario'
        });
    }
}

module.exports = propietarioCtrl;