import { BsBag } from 'react-icons/bs';
import cartContext from '../../context/cartContext';
import { useContext } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function CartWidget() {
  
  const { getCountInCart } = useContext(cartContext);
  
  return (
        
        <button className='cart-widget'>
             <Link to='/cart'>

                <BsBag  
                  className='icon'
                  />

                {
                  getCountInCart()?
                  <span className='cont'>{getCountInCart()}</span>
                  :
                  ''
                }
                
             </Link>

        </button>

  );
}

export default CartWidget;