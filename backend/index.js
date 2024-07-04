const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/usuario', require('./routes/usuario.route.js'));
app.use('/api/local', require('./routes/local.route.js'));
app.use('/api/local/promociones', require('./routes/promocion.route.js'));
app.use('/api/local/novedades', require('./routes/novedad.route.js'));
app.use('/api/alquiler', require('./routes/alquiler.route.js'));
app.use('/api/alquiler/cuota', require('./routes/cuota.route.js'));
app.use('/api/alquiler/pago', require('./routes/pago.route.js'));

app.use('/api/rol', require('./routes/rol.route.js'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});
