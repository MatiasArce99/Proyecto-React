import Item from "../Item/Item";
const ItemList = ({juegoList}) => {
    console.log(juegoList);
    return (
        <div>
            {juegoList.map(jueg => <Item key={jueg.id} juego = {jueg}/>)}
        </div>
    );
}

export default ItemList;
