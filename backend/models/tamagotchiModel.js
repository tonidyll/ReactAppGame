const mongoose = require('mongoose')

const tamagotchiSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  nivelHambre: {
    type: Number,
    required: true
  },
  nivelEnergia: {
    type: Number,
    required: true
  },
  nivelFelicidad: {
    type: Number,
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  }
}, {
  versionKey: false,
})

const Tamagotchi = mongoose.model('PartidaTamagotchi', tamagotchiSchema)

module.exports = Tamagotchi
