import { Link } from "react-router-dom";
//CARD PRODUCTO
const Item = ({ juego }) => {
    
    return (
        <div>
            <div className="card cardJuego">
                <img src={`../img/${juego.img}`} className="card-img-top" alt="..." />
                <div className="card-body cardBody">
                    <h5 className="card-title">{juego.nombre}</h5>
                    <p className="card-text">{juego.plataforma}</p>
                    <p className="card-text">{juego.tipo}</p>
                    <p className="card-text">{juego.precio}</p>
                    <button className="btn btn-dark"><Link className="nav-link" to={`/juego/${juego.id}`}>Ver Juego</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Item;