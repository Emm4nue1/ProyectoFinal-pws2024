const Pago = require('../models/pago');
const pagoCtrl = {};

// Crear un nuevo pago
pagoCtrl.createPago = async (req, res) => {
  try {
    const nuevoPago = new Pago(req.body);
    await nuevoPago.save();
    res.status(201).json(nuevoPago);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los pagos
pagoCtrl.getPagos = async (req, res) => {
  try {
    const pagos = await Pago.find();
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un pago por ID
pagoCtrl.getPagoById = async (req, res) => {
  try {
    const pago = await Pago.findById(req.params.id);
    if (pago) {
      res.json(pago);
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un pago por ID
pagoCtrl.updatePago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (pago) {
      res.json(pago);
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un pago por ID
pagoCtrl.deletePago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndDelete(req.params.id);
    if (pago) {
      res.json({ message: 'Pago eliminado' });
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = pagoCtrl;