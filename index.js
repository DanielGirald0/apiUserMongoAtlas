const express = require('express');
var cors = require('cors') //para que el navegador nos deje acceder (crud) cualquier recurso 
const mongoose = require('mongoose');
require('dotenv').config(); // Manejo de variables de entorno en el archivo .env
// Importar el archivo de las rutas
const userRoutes = require('./routes/user') //para todos los endpoint

const app = express();
const port = process.env.PORT || 3200  //si existe una variable de entorno PORT, tome ese valor, de lo contrario tome el puerto 3200

// Middleware para json
app.use(express.json())
// Middleware para rutas
app.use('/api', userRoutes);  // para conumir la api empieza con /api
// cors
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hola, desde API REST")
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a la base de datos de MongoDB Atlas"))
    .catch(() => console.error("Error de conexión a la base de datos"))

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})