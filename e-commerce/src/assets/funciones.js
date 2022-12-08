const consultarBD = async (ruta) => {
    const response = await fetch(ruta)//Consulta asincrónica
    const juegos = await response.json()    
    return juegos;
}

export {consultarBD};