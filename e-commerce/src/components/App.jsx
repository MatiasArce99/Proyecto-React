import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

const App = () => {  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Primera Entrega"}/>
      <ItemCount/>
    </>
  );
}

export default App;