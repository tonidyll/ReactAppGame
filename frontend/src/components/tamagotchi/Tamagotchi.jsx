import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './Tamagotchi.css?inline';
import bad from '../../assets/bad.png';
import good from '../../assets/good.png';
import medium from '../../assets/medium.png';

function Tamagotchi() {
  const [name, setName] = useState('Tamagotchi');
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [alive, setAlive] = useState(true);
  const [date, setDate] = useState("");

  const postData = async () => {
    const data = {
      nombre: "Alex",
      nivelHambre: 0,
      nivelEnergia: 20,
      nivelFelicidad: 80,
      fechaNacimiento: date
    };
    console.log(JSON.stringify(data));
    try {
      const response = await axios.post('http://localhost:3000/partidaTamagotchi', JSON.stringify(data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (alive) {
      console.log(alive);
      const interval = setInterval(() => {
        setAge(age => age + 1);
        setHealth(health => Math.max(0, health - 5));
        setHunger(hunger => Math.max(0, hunger - 5));
        setHappiness(happiness => Math.max(0, happiness - 5));
        setEnergy(energy => Math.max(0, energy - 5));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (age > 0 && date === "") {
      setDate(new Date().toLocaleString());
      console.log(date);
    }
  }, [age]);

  const feed = () => {
    setHunger(hunger => Math.min(100, hunger + 20));
    setHealth(health => Math.min(100, health + 5));
    setHappiness(happiness => Math.min(100, happiness + 5));
    setEnergy(energy => Math.min(100, energy + 10));
  };

  const play = () => {
    setHunger(hunger => Math.min(100, hunger - 5));
    setHealth(health => Math.min(100, health - 5));
    setHappiness(happiness => Math.min(100, happiness + 20));
    setEnergy(energy => Math.min(100, energy - 15));
  };

  const sleep = () => {
    setHunger(hunger => Math.min(100, hunger - 5));
    setHealth(health => Math.min(100, health + 10));
    setHappiness(happiness => Math.min(100, happiness - 5));
    setEnergy(energy => Math.min(100, energy + 15));
  };

  const hit = () => {
    setHealth(health => Math.min(100, health - 20));
    setHappiness(happiness => Math.min(100, happiness - 20));
  };

  useEffect(() => {
    if (health <= 0 || hunger <= 0 || happiness <= 0 || energy <= 0) {
      setAlive(false);
    }
  }, [health, hunger, happiness, energy]);

  const isDead = () => {
    setAlive(false);
    if(!alive)
    postData();
    return (
      <>
        <h1>Your tamagotchi has died</h1>
      </>
    );
  };

  const isLiving = () => {
    return (
      <div className="button-container">
        <button onClick={feed}>Feed</button>
        <button onClick={play}>Play</button>
        <button onClick={sleep}>Sleep</button>
        <button onClick={hit}>Hit</button>
      </div>
    );
  };

  const getBarColor = value => {
    if (value > 80) {
      return 'green';
    } else if (value > 20) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const getImageSrc = health => {
    if (health > 80) {
      return good;
    } else if (health > 20) {
      return medium;
    } else {
      return bad;
    }
  };

  return (
    <>
      <img src={getImageSrc(health)} className="image " alt='state'></img>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>
        Health:
      </p>
      <div
        className="progress-bar"
        style={{ width: `${health}%`, backgroundColor: getBarColor(health) }}
      >
        {health}
      </div>
      <p>
        Happiness:
      </p>
      <div
        className="progress-bar"
        style={{ width: `${happiness}%`, backgroundColor: getBarColor(happiness) }}
      >
        {happiness}
      </div>

      <p>
        Hunger:
      </p>
      <div
        className="progress-bar"
        style={{ width: `${hunger}%`, backgroundColor: getBarColor(hunger) }}
      >
        {hunger}
      </div>
      <p>
        Energy:
      </p>
      <div
        className="progress-bar"
        style={{ width: `${energy}%`, backgroundColor: getBarColor(energy) }}
      >
        {hunger}
      </div>
      {alive ? isLiving() : isDead()}
      <Link to="/">   <button
        className="padding-left pl-4 bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
      >
        volver al Home
      </button></Link>




    </>
  );
}
export default Tamagotchi;