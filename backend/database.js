const mongoose = require('mongoose');
const URI = 'mongodb+srv://galeriapacifico:cebEdX9gz0iTptZr@proyectofinalpysw24.ecj1mer.mongodb.net/?retryWrites=true&w=majority&appName=ProyectoFinalPySW24';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;