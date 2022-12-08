//Consultar BD
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { consultarBD } from '../../assets/funciones.js'
const ItemListContainer = ({ greeting }) => {

  const [juegos, setJuegos] = useState([]);
  useEffect(() => {
    consultarBD('./json/juegos.json').then(juegoList => {
      const cardJuegos = ItemList({ juegoList })
      setJuegos(cardJuegos);
    })
  }, []);

  //console.log(juegos);

  return (
    <div className="row cardJuegos">
      {juegos}
    </div>
  );
}

export default ItemListContainer;