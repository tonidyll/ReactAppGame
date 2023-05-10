const Tamagotchi = require('../models/tamagotchiModel')

const tamagotchiController = {
  create: async (req, res) => {
    const { nombre, nivelHambre, nivelEnergia, nivelFelicidad, fechaNacimiento } = req.body
    const tamagotchi = new Tamagotchi({ nombre, nivelHambre, nivelEnergia, nivelFelicidad, fechaNacimiento })

    try {
      await tamagotchi.save()
      res.status(201).json(tamagotchi)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  getAll: async (req, res) => {
    try {
      const tamagotchis = await Tamagotchi.find()
      res.json(tamagotchis)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

module.exports = tamagotchiController
