import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import Button from "../Button/Button";

function CheckOut( { cart, total } ) {

    const { clearCart } = useContext(cartContext);
    const navigateTo = useNavigate();


    async function handleCheckout() {
        
        const orderData = { 
            buyer: { name: 'Santiago', phone: '123456', email: 'santi@santi.com' },
            items: cart,
            total: total,
            timestamp: new Date(),
        }

        const id = await createOrder(orderData);
        navigateTo(`/checkout/${id}`);
        clearCart();
        
    } 

  return (
    <div className='container'>
        
        <Button onTouchButton={handleCheckout} >Terminar Compra</Button>
        
    </div>
  )
}

export default CheckOut;