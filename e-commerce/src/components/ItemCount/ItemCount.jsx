import { useState } from 'react';

const ItemCount = ({ stock }) => {

    const [contador, setContador] = useState(1);
    const incrementar = () => contador < stock && setContador(contador + 1);
    const decrementar = () => contador > 1 && setContador(contador - 1);

    return (
        <div>
            <button className='btn btn-dark' onClick={() => incrementar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => decrementar()}>-</button>
            <button className='btn btn-light'>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;