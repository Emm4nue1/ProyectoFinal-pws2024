const Promocion = require('../models/promocion');
const promocionCtrl = {};

// Crear una nueva promoción
promocionCtrl.createPromocion = async (req, res) => {
  try {
    const nuevaPromocion = new Promocion(req.body);
    await nuevaPromocion.save();
    res.status(201).json(nuevaPromocion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las promociones
promocionCtrl.getPromociones = async (req, res) => {
  try {
    const promociones = await Promocion.find();
    res.json(promociones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una promoción por ID
promocionCtrl.getPromocionById = async (req, res) => {
  try {
    const promocion = await Promocion.findById(req.params.id);
    if (promocion) {
      res.json(promocion);
    } else {
      res.status(404).json({ message: 'Promoción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una promoción por ID
promocionCtrl.updatePromocion = async (req, res) => {
  try {
    const promocion = await Promocion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (promocion) {
      res.json(promocion);
    } else {
      res.status(404).json({ message: 'Promoción no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una promoción por ID
promocionCtrl.deletePromocion = async (req, res) => {
  try {
    const promocion = await Promocion.findByIdAndDelete(req.params.id);
    if (promocion) {
      res.json({ message: 'Promoción eliminada' });
    } else {
      res.status(404).json({ message: 'Promoción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = promocionCtrl;