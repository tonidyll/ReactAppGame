const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
// Rutas
const rpslsRoutes = require('./routes/rpslsRoutes')
const tamagotchiRoutes = require('./routes/tamagotchiRoutes')

// Conexión a la base de datos
mongoose.connect('mongodb+srv://root:root@cluster0.m49gdy4.mongodb.net/AppGameDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error(err))

// Middleware
app.use(bodyParser.json())


app.use('/partidasrpsls', rpslsRoutes)
app.use('/partidaTamagotchi', tamagotchiRoutes)

// Servidor
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))
