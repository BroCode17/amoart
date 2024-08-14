// context/CartContext.js
'use client'
import { updateInitState } from '@/_redux/slices/cartSlice';
import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const [cartItems, setCartItems] = useState([]);

  const [isOpen, setIsOpen] = useState(JSON.parse(localStorage.getItem('cartItems')!) || []);
  const dispatch = useDispatch()
  console.log(cartItems)

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (item) => {
  //   setCartItems((prevItems) => [...prevItems, item]);
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  // };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, isOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};


