import { useState, useEffect } from "react";
import GameOptions from "./GameOption/GameOption";
import { Link } from "react-router-dom";
import axios from 'axios';





const options = [{ id: 0, name: "Piedra", emoji: "🧱", beats: [2, 3] },
{ id: 1, name: "Papel", emoji: "📄", beats: [0] },
{ id: 2, name: "Tijera", emoji: "✂️", beats: [1, 3] },
{ id: 3, name: "Lagarto", emoji: "🦎", beats: [1] },
{ id: 4, name: "Spock", emoji: "🖖", beats: [3, 0] },
];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1;
  }

  return 2;
};

function useChoices() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState('Monlau');
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [userName, setUserName] = useState("Monlau");

  useEffect(() => {
    const postData = async () => {
      if (result !== null) {
        const data = {
          jugador: userName,
          resultado: 'hola'
        };
        console.log(JSON.stringify(data));
        try {
          const response = await fetch('http://127.0.0.1:3000/partidasrpsls', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
  
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
          } else {
            throw new Error('Request failed with status ' + response.status);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
  
    postData();
  }, [result, userName]);
  
  
  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(
        `El ordenador ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 5);

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 3000);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
    setUserName('Monlau');
  };

  return {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    userName,
    result, // Add 'result' to the return object
    disabled,
    handlePlay,
    reset,
  };
}
<p>

  <div>

  </div>
</p>



export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    userName,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();


  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        
        <div className="max-w-md mx-auto">
          <GameOptions
            options={options}
            handlePlay={handlePlay}
            disabled={disabled}
          />
          {userChoice !== null && <p className="text-xl mt-4">{userMessage}</p>}
          {computerChoice !== null && (
            <p className="text-xl mt-4">{computerMessage}</p>
          )}
          {result !== null && (
            <div className="mt-8">
              {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
              {result === 1 && (
                <p className="text-xl mt-4">
                  ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
                onClick={reset}
              >
                Jugar de nuevo
              </button>
              
            </div>
            
          )}
        </div>
        <Link to="/">   <button
          className="padding-left pl-4 bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
          onClick={reset}
        >
          volver al Home
        </button></Link>
      </div>
    </div>
  );
}
