import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../context/cartContext';
import { createOrder } from '../../services/firestore';
import CheckoutForm from './CheckOutForm';

function CheckOut( { cart, total } ) {

    const { clearCart } = useContext(cartContext);
    const navigateTo = useNavigate();


    async function handleCheckout(userData) {
        
        const orderData = { 
            buyer: userData,
            items: cart,
            total: total,
            timestamp: new Date(),
        }


        const id = await createOrder(orderData);
        navigateTo(`/checkout/${id}`);
        clearCart();        
    } 

  return (
    <div>
        
        <CheckoutForm onSubmit={handleCheckout}/>
        
    </div>
  )
}

export default CheckOut;