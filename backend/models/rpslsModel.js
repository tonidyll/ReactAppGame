const mongoose = require('mongoose')

const partidaSchema = new mongoose.Schema({
  jugador: { type: String, required: true },
  resultado: { type: String, enum: ['Ganó el jugador', 'Ganó la computadora', 'Empate'], required: true },
  fecha: { type: Date, default: Date.now }
}, {
  versionKey: false,
})

module.exports = mongoose.model('PartidaRPSLS', partidaSchema)
