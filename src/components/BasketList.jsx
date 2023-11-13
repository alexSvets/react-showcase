import React from "react";
import { BasketItem } from "./BasketItem";

export function BasketList(props) {
  const {
    order,
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list with-header">
      <li className="collection-header ">
        <h4>Basket</h4>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              key={item.id}
              {...item}
              removeFromBasket={removeFromBasket}
            />
          );
        })
      ) : (
        <li className="collection-item">Cart is empty </li>
      )}
      <li className="collection-header">
        <h5>Total cost: {totalPrice} $</h5>
      </li>
    </ul>
  );
}
