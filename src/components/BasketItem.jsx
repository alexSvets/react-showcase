import React from "react";

export function BasketItem(props) {
  const {
    id,
    name,
    quantity,
    finalPrice,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {finalPrice * quantity} $
      <span onClick={() => removeFromBasket(id)} className="secondary-content">
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}
