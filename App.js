import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const increaseQuantity = (product) => {
    const updatedCart = cart.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const updatedCart = cart.map(item => {
      if (item.id === product.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  return (
    <div className="App">
      <Header />
      {!checkout ? (
        <>
          <ProductList addToCart={addToCart} />
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} 
            handleCheckout={handleCheckout} 
          />
        </>
      ) : (
        <Checkout cart={cart} />
      )}
    </div>
  );
}

export default App;
