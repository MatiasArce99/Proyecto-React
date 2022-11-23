import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Buen día"}/>
    </>
  );
}

export default App;