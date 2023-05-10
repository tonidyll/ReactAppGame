import React from "react";

function OptionButton({ option, handlePlay, disabled }) {
  return (
    <button
      className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      {option.emoji}
    </button>
  );
}

export default function GameOptions({ options, handlePlay, disabled }) {
  return (
    <>
      {options.map((option) => (
        <OptionButton
          key={option.id}
          option={option}
          handlePlay={handlePlay}
          disabled={disabled}
        />
      ))}
    </>
  );
}
