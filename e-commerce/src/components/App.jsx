import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Primera Entrega"} />
      <ItemCount stock={10} />
      <ItemDetailContainer />
    </>
  );
}

export default App;