import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-200 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Welcome to Home!
        </h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Link
            to="/tamagotchi"
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 border-b-4 border-yellow-700 rounded-lg"
          >
            Tamagotchi
          </Link>
          <Link
            to="/rpsls"
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 border-b-4 border-yellow-700 rounded-lg"
          >
            RPSLS
          </Link>
          <Link
            to="/records"
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 border-b-4 border-yellow-700 rounded-lg"
          >
            Records
          </Link>
        </div>
      </div>
    </div>
  );
}
