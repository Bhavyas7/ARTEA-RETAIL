import React from 'react';

const Checkout = ({ cart }) => (
  <div className="checkout">
    <h2>Checkout</h2>
    <p>Thank you for your purchase!</p>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </li>
      ))}
    </ul>
    <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
  </div>
);

export default Checkout;
