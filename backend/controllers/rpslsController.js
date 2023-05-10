const Partida = require('../models/rpslsModel')

exports.create = async (req, res) => {
  const partida = new Partida(req.body)

  try {
    await partida.save()
    res.status(201).send(partida)
  } catch (err) {
    res.status(400).send(err)
  }
}

exports.getAll = async (req, res) => {
  try {
    const partidas = await Partida.find()
    res.send(partidas)
  } catch (err) {
    res.status(500).send(err)
  }
}
