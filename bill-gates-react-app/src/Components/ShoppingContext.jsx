// ShoppingContext.js
import React, { createContext, useContext, useState } from "react";
import items from "./Products";

const ShoppingContext = createContext();

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);

  return context;
};

export const ShoppingProvider = ({ children }) => {
  const [money, setMoney] = useState(100000000000);
  const [itemsSet, setItemsSet] = useState(items);

  const spendMoney = (price) => {
    if (money >= price) {
      setMoney((prev) => prev - price);
    }
  };

  const sellProduct = (price) => {
    setMoney((prev) => prev + price);
  };

  const handleSell = (index) => {
    sellProduct(itemsSet[index].price, index);
    setItemsSet((prev) => {
      const newItems = [...prev];
      newItems[index] = {
        ...newItems[index],
        quantity: newItems[index].quantity - 1,
      };
      return newItems;
    });
  };

  const handleBuy = (index) => {
    if (itemsSet[index].quantity >= 0 && itemsSet[index].price <= money) {
      setItemsSet((prev) => {
        const newItems = [...prev];
        newItems[index] = {
          ...newItems[index],
          quantity: newItems[index].quantity + 1,
        };
        return newItems;
      });
      spendMoney(itemsSet[index].price, index);
    }
  };

  const getReceiptTotal = () => {
    return itemsSet
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toLocaleString();
  };

  const getReceiptItems = () => {
    return itemsSet
      .filter((item) => item.quantity > 0)
      .map((item) => (
        <li key={item.id}>
          {item.name} x {item.quantity} - $
          {(item.price * item.quantity).toLocaleString()}
        </li>
      ));
  };

  return (
    <ShoppingContext.Provider
      value={{
        money,
        itemsSet,
        handleSell,
        handleBuy,
        getReceiptTotal,
        getReceiptItems,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
