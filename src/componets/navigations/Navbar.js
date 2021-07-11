import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context";
import { routes } from "../../routes";

const Navbar = () => {
  const context = useContext(ShopContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.products}>Products</Link>
        </li>
        <li>
          <button onClick={context.handleCartOpen}>cart</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
