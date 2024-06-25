const Novedad = require('../models/novedad');
const novedadCtrl = {}

novedadCtrl.getNovedades = async (req, res) => {
    var novedades = await Novedad.find().populate("usuario");
    res.json(novedades);
}

novedadCtrl.createNovedad = async (req, res) => {
    var novedad = new Novedad(req.body);
    try {
        await novedad.save();
        res.json({
           'status': '1',
           'message': 'Novedad creada'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al crear la novedad'
        });
    }
}

novedadCtrl.getNovedad = async (req, res) => {
    const novedad = await Novedad.findById(req.params.id).populate('usuario');
    res.json(novedad);
}

novedadCtrl.updateNovedad = async (req, res) => {
    const vnovedad = new Novedad(req.body);
    try {
        await Novedad.updateOne({_id: req.body._id }, vnovedad);
        res.json({
           'status': '1',
           'message': 'Novedad actualizada'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
           'status': '0',
           'message': 'Error al actualizar la novedad'
        });
    }
}

novedadCtrl.deleteNovedad = async (req, res) => {
    try{
        await Novedad.deleteOne({_id: req.params.id});
        res.json({
           'status': '1',
           'message': 'Novedad eliminada'
        });
    } catch (error) {
        res.status(400).json({
           'status': '0',
           'message': 'Error al eliminar la novedad'
        });
    }
}

module.exports = novedadCtrl;


