//Consultar BD
import ItemList from "../ItemList/ItemList";
import {consultarBD} from '../../assets/funciones.js'
const ItemListContainer = ({ greeting }) => {  

  consultarBD().then(juegos => console.log(juegos));
  return (
    <>
      <p>{greeting}</p>
    </>
  );
}

export default ItemListContainer;