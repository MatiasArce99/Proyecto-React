import {useState} from 'react';

const ItemCount = () => {
    const [numero, setNumero] = useState(0);
    const boton = document.getElementById('boton1');
    console.log(boton);
    
    return (
        <div>
            <button className='btn btn-dark' id='boton1'>+</button>
            {numero}
        </div>
    );
}

export default ItemCount;
