import React from 'react';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, handleCheckout }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item)}>+</button>
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))
    )}
    {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
  </div>
);

export default Cart;
