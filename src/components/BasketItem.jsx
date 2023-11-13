import React from "react";

export function BasketItem(props) {
  const {
    id,
    name,
    quantity,
    finalPrice,
    removeFromBasket = Function.prototype,
    decrementQuantity = Function.prototype,
    incrementQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}
      <i
        className="material-icons basket-quantity"
        onClick={() => decrementQuantity(id)}
      >
        remove
      </i>
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => incrementQuantity(id)}
      >
        add
      </i>
      = {finalPrice * quantity} $
      <span onClick={() => removeFromBasket(id)} className="secondary-content">
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}
