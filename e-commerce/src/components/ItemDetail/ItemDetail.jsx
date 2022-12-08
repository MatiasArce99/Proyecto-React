import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ juego }) => {
    console.log(juego);
    return (
        <div className="row g-0">
            <div className="col-md 4">
                <img src={`../img/${juego.img}`} alt="" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{juego.nombre}</h5>
                    <p className="card-text">Consola: {juego.plataforma}</p>
                    <p className="card-text">Tipo: {juego.tipo}</p>
                    <p className="card-text">Precio: ${juego.precio}</p>
                    <ItemCount stock = {juego.stock}/>
                    <button className="btn btn-secondary">Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
