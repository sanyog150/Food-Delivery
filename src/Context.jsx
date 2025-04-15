import React, { createContext, useEffect, useState } from "react";
import { food_list } from "./assets/frontend/assets";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    //it decrese value by one
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id === item)
        totalAmount += itemInfo.price*cartItems[item]
      }
    }
    return totalAmount
  }
 

  return (
    <UserContext.Provider
      value={{
        food_list,
        category,
        cartItems,
        setCategory,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
