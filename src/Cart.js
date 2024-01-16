import { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import "./App.css";
import Cart2 from "./Images/cart.jpg";
const Cart = () => {
  const Navigate = useNavigate();
  const result = useSelector((state) => state);

  // console.log(result);
  return (
    <div className="text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        className="bi bi-cart-fill cartimg"
        onClick={() => Navigate("/cartdisplay")}
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      {/* <img
        src="Img/cart1.png"
        className=""
     
        alt="img"
      /> */}

      <h1 className="abcd">{result.length > 0 ? result.length : ""}</h1>
    </div>
  );
};
export default Cart;
