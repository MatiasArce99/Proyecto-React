import './App.css';

const App = () => {
  const usuario = {nombre: "Matías", apellido: "Arce"}
  return (
    <div>
      <h1 className='titulo letra'>Buen día!</h1>
      <p className='parrafo'>Hola {usuario.nombre} {usuario.apellido}</p>
    </div>
  );
}

export default App;