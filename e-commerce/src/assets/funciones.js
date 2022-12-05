const consultarBD = async () => {
    const response = await fetch('./json/juegos.json')//Consulta asincrónica
    const juegos = await response.json()    
    return juegos;
}

export {consultarBD};