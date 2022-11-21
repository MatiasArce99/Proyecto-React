import './App.css';
import Navbar from './Navbar/Navbar';

const App = () => {
  const usuario = {nombre: "Matías", apellido: "Arce"}
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;