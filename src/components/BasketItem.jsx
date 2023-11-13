import React from "react";

export function BasketItem(props) {
  const { id, name, quantity, finalPrice } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {finalPrice} $
      <span className="secondary-content">
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}
