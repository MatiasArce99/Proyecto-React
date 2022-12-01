import { useState } from 'react';
const ItemListContainer = ({ greeting }) => {

  const [numero, setNumero] = useState(0)

  return (
    <>
      <p>{numero}</p>
      <p>{greeting}</p>
    </>
  );
}

export default ItemListContainer;
