import { createContext, useState } from "react";

const cartContext = createContext({cart: [],});
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);


  function addItem(item, count) {
    const newCart = JSON.parse(JSON.stringify(cart));
    
    if(isInCart(item.id)) {
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...item, count});
    }
    setCart(newCart);
  }

  function removeItemFromCart (id) {
    const newCart = JSON.parse(JSON.stringify(cart));
    setCart(newCart.filter(item => item.id !== id));
  }
  function getCountInCart() {
    
    return cart.reduce((acc, newCount) => acc + newCount.count, 0);
    
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  const totalInCart = () => cart.reduce((acc, act) => acc + act.price * act.count, 0);

 function clearCart () {
   setCart([]);
  
 }

  return (
    // 5 pasar la prop value
    <Provider value={{ cart, addItem, isInCart, removeItemFromCart, getCountInCart, totalInCart, clearCart }}>
      {children}
    </Provider>
  );
}

export default cartContext;