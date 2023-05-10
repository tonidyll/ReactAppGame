// Importamos los componentes necesarios de la librería react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Importamos los componentes que vamos a utilizar en cada ruta
import Home from './components/home';
import Game from './components/rpsls/Game/Game';
import Tamagotchi from './components/tamagotchi/Tamagotchi';
import Records from './components/records/Records';
// import Records from './components/Records';
// Creamos nuestro componente App
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rpsls" element={<Game />} />
                <Route path="/tamagotchi" element={<Tamagotchi />} />
                <Route path="/records" element={<Records />} />

            </Routes>
        </BrowserRouter>
    );
}
// Exportamos nuestro componente App para poder utilizarlo en otras partes del proyecto
export default App;