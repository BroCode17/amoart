import { openCartModal, updateInitState } from "@/_redux/slices/cartSlice";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Cookies   from "js-cookie";

const loadFromCookies = () => {
  if (typeof window === "undefined") {
    return {data: [], totalAmount: 0}; // Provide a fallback if accessed during SSR
  }

  try {
    const serializedState = Cookies.get("cartItems");
    return serializedState ? JSON.parse(serializedState) : {data: [], totalAmount: 0};
  } catch (e) {
    console.warn("Could not load cart items from cookies", e);
    return {data: [], totalAmount: 0};
  }
};

const Cart = () => {
  const item = useSelector((state: any) => state.cart.products);

  const dispatch = useDispatch();
  // localStorage.getItem('cartItems')

  //   if (typeof window !== 'undefined') {
  //     console.log('we are running on the client')
  //     console.log(JSON.parse(localStorage.getItem('cartItems')!))
  // }

  useEffect(() => {
    // const handleLoad = () => {
    //   console.log("Page fully loaded");
    //   // Your code here
    // };

    // // Check if window object is available
    // if (typeof window !== "undefined") {
    //   window.addEventListener("load", () => {
    //     console.log("Hello");
    //   });
    // }

    // return () => {
    //   // Cleanup the event listener on component unmount
    //   if (typeof window !== "undefined") {
    //     window.removeEventListener("load", handleLoad);
    //   }
    // };

    dispatch(updateInitState(loadFromCookies()))
  }, []);

  return (
    <div
      className="relative w-4 cursor-pointer"
      onClick={() => {
        dispatch(openCartModal());
      }}
    >
      <FaCartShopping />
      {item.length > 0 && (
        <div className="w-2 h-2 bg-red-500 rounded-full absolute inset-0 left-[0.7rem] -top-[0.2rem]"></div>
      )}
    </div>
  );
};

export default Cart;
