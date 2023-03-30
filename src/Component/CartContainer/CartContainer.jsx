import React from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { TiDelete } from 'react-icons/ti';
import "./styles.css";
import CheckOut from "./CheckOut";
import CartEmpty from "../CartEmpty/CartEmpty";
import Button from "../Button/Button";

function CartContainer() {
  const { cart, totalInCart, removeItemFromCart, clearCart } = useContext(cartContext);

  if (cart.length === 0) {
      return (
        <CartEmpty />
      )
  }

  return (
      <>
      <div className='products container'>
            <div className='products__content'>
                <div className='products__content-carrito'>
                    
                  
                  {
                    
                    cart.map((user) => {
                      return (
                          <div key={user.id} className='products__content-card'>
                                <div className='products__content-card-img'>
                                    <img src={user.img300} alt={user.title} />
                                </div>
                                <div className='products__content-cart-title'>
                                    <small>Producto</small>
                                    <p>{user.title}</p>
                                </div>
                                <div className='products__content-cart-detail'>
                                    <small>Precio</small>
                                    <p>{user.price}</p>
                                </div>
                                <div className='products__content-cart-detail'>
                                    <small>Cantidad</small>
                                    <p>{user.count}</p>
                                </div>
                                <div className='products__content-cart-detail'>
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
                    <div>
                          <h5>Total del carrito:</h5>          
                          <p>${ totalInCart() }</p>
                    </div>

                    <CheckOut total = {totalInCart()} cart = { cart }/>

                    <div>
                        <Button onTouchButton={ () => clearCart() }>Limpiar Carrito</Button>
                    </div>
                </div>
            </div>
            

            
      </div>
      
      
      </>
      
  );
}

export default CartContainer;