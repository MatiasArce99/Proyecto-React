import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/juego/:id' element={<ItemDetailContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;