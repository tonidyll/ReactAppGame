import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Records = () => {
  const [tamagotchiPartidas, setTamagotchiPartidas] = useState([]);
  const [rpslsPartidas, setRpslsPartidas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/partidaTamagotchi')
      .then(response => response.json())
      .then(data => setTamagotchiPartidas(data));

    fetch('http://localhost:3000/partidasrpsls')
      .then(response => response.json())
      .then(data => setRpslsPartidas(data));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-200 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Records
        </h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2>Tabla 1: Partidas Tamagotchi</h2>
          <table className="border-collapse border border-gray-800">
            <thead>
              <tr className="bg-yellow-500 text-black font-semibold">
                <th className="border border-gray-800 px-4 py-2">Nombre</th>
                <th className="border border-gray-800 px-4 py-2">Nivel de Hambre</th>
                <th className="border border-gray-800 px-4 py-2">Nivel de Energía</th>
                <th className="border border-gray-800 px-4 py-2">Nivel de Felicidad</th>
                <th className="border border-gray-800 px-4 py-2">Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody>
              {tamagotchiPartidas.map(partida => (
                <tr key={partida.id}>
                  <td className="border border-gray-800 px-4 py-2">{partida.nombre}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.nivelHambre}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.nivelEnergia}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.nivelFelicidad}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.fechaNacimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <h2>Tabla 2: Partidas RPSLS</h2>
          <table className="border-collapse border border-gray-800">
            <thead>
              <tr className="bg-yellow-500 text-black font-semibold">
                <th className="border border-gray-800 px-4 py-2">Jugador</th>
                <th className="border border-gray-800 px-4 py-2">Resultado</th>
                <th className="border border-gray-800 px-4 py-2">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {rpslsPartidas.map(partida => (
                <tr key={partida.id}>
                  <td className="border border-gray-800 px-4 py-2">{partida.jugador}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.resultado}</td>
                  <td className="border border-gray-800 px-4 py-2">{partida.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 border-b-4 border-yellow-700 rounded-lg">
              volver al Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default Records;
