import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><p>Tucumán Videojuegos</p></a>        
      <Categorias />
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;