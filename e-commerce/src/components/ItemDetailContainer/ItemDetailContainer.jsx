import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { consultarBD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        consultarBD('../json/juegos.json').then(juegos => {
            const jueg = juegos.find(j => j.id === parseInt(id));
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