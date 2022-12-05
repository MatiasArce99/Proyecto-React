const Item = ({ juego }) => {
    console.log(juego);
    return (
        <div>
            <div className="card cardJuego">
                <img src={`../img/${juego.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{juego.nombre}</h5>
                    <p className="card-text">{juego.plataforma}</p>
                    <p className="card-text">{juego.tipo}</p>
                    <p className="card-text">{juego.precio}</p>
                    <button className="btn btn-dark">Ver Juego</button>
                </div>
            </div>
        </div>
    );
}

export default Item;