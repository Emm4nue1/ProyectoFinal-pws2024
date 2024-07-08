const Promocion = require('../models/promocion');
const promocionCtrl = {};

// Crear una nueva promoción
promocionCtrl.createPromocion = async (req, res) => {
  console.log('req.body:', req.body);
  try {
    const promocion = new Promocion(req.body);
    await promocion.save();
    res.json({ status: '1', msg: 'Promoción guardada.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ status: '0', msg: 'Error procesando operación.', error: error.message });
  }
};

// Obtener todas las promociones
promocionCtrl.getPromociones = async (req, res) => {
  try {
    const promociones = await Promocion.find({ usuario: req.usuario_id }).populate("local");
    res.json(promociones);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: '0', msg: 'Error procesando operación.', error: error.message });
  }
};

// Obtener una promoción por ID
promocionCtrl.getPromocionById = async (req, res) => {
  try {
    const promocion = await Promocion.findById(req.params.id).populate("local");
    if (!promocion) {
      return res.status(404).json({ status: '0', msg: 'Promoción no encontrada.' });
    }
    res.json(promocion);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: '0', msg: 'Error procesando operación.', error: error.message });
  }
};

// Actualizar una promoción por ID
promocionCtrl.updatePromocion = async (req, res) => {
  console.log('req.body:', req.body);
  try {
    const promocion = await Promocion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!promocion) {
      return res.status(404).json({ status: '0', msg: 'Promoción no encontrada.' });
    }
    res.json({ status: '1', msg: 'Promoción actualizada.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ status: '0', msg: 'Error procesando operación.', error: error.message });
  }
};

// Eliminar una promoción por ID
promocionCtrl.deletePromocion = async (req, res) => {
  try {
    const promocion = await Promocion.findByIdAndDelete(req.params.id);
    if (!promocion) {
      return res.status(404).json({ status: '0', msg: 'Promoción no encontrada.' });
    }
    res.json({ status: '1', msg: 'Promoción eliminada.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: '0', msg: 'Error procesando operación.', error: error.message });
  }
};

module.exports = promocionCtrl;