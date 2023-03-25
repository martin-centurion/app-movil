import React from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { TiDelete } from 'react-icons/ti';
import "./styles.css";
import CheckOut from "./CheckOut";
import CartEmpty from "../CartEmpty/CartEmpty";

function CartContainer() {
  const { cart, totalInCart, removeItemFromCart } = useContext(cartContext);

  if (cart.length === 0) {
      return (
        <CartEmpty />
      )
  }

  return (
      <>
      <div className='products container'>
            <div className='products__content'>
                  {
                    
                    cart.map((user) => {
                      return (
                          <div key={user.id} className='products__content-card'>
                                <div>
                                    <img border-radius={50} height={100} src={user.img300} alt={user.title} />
                                </div>
                                <div className='products__content-cart-title'>
                                    <small>Producto</small>
                                    <p>{user.title}</p>
                                </div>
                                <div>
                                    <small>Precio</small>
                                    <p>{user.price}</p>
                                </div>
                                <div>
                                    <small>Cantidad</small>
                                    <p>{user.count}</p>
                                </div>
                                <div>
                                    <small>Subtotal</small>
                                    <p>${ user.count * user.price }</p>
                                </div>
                                <div className='btn-delete'>
                                  <button onClick={ () => removeItemFromCart(user.id) }>
                                    <TiDelete />
                                  </button>
                                </div>
                                
                          </div>

                      );
                    })
                    
                  }
            </div>
            <div className='total'>
                <h5>Total precio:</h5>          
                <p>${ totalInCart() }</p>
            </div>

            <CheckOut />
      </div>
      
      
      </>
      
  );
}

export default CartContainer;