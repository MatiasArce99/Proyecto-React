import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { consultarBD } from '../../assets/funciones.js'
const ItemListContainer = ({ greeting }) => {

  const [juegos, setJuegos] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    if (categoria) {
      consultarBD('../json/juegos.json').then(game => {
        const juegoList = game.filter(jueg => jueg.stock > 0).filter(jueg => jueg.idCategoria === parseInt(categoria));
        const cardJuegos = ItemList({ juegoList })
        setJuegos(cardJuegos);
      })

    } else {
      consultarBD('./json/juegos.json').then(game => {
        const juegoList = game.filter(jueg => jueg.stock > 0)
        const cardJuegos = ItemList({ juegoList })
        setJuegos(cardJuegos);
      })
    }

  }, [categoria]);

  //console.log(juegos);
  
  return (
    <div className="row cardJuegos">
      {juegos}
    </div>
  );
}

export default ItemListContainer;