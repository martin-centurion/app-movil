import { createContext, useState } from "react";
// 1 Crear el context
// 2 Usar el context
// 3 Proveer el context

const cartContext = createContext({
  cart: [],
});

// 4 Crear un Custom Provider
function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(user, count) {
    const newCart = [...cart];

    user.count = count;
    newCart.push(user);
    //newCart.push({...user,count});

    setCart(newCart);
    //setCart([...cart, user]);
  }

  return (
    // 5 pasar la prop value
    <cartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;