import { useState, useEffect } from "react";
import { consultarBD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
    useEffect(() => {
        consultarBD().then(juegos => {
            const jueg = juegos.find(j => j.id === 1)
            setJuego(jueg);
        })
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail juego={juego} />
        </div>
    );
}

export default ItemDetailContainer;
