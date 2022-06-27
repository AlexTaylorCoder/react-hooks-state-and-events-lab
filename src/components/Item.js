import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, inCartFun] = useState(false)

  function addtoCart() {
    inCartFun(!inCart)
  }
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addtoCart} className="add">{inCart ? "Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
