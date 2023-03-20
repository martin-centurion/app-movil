import { BsBag, BsSearch } from 'react-icons/bs';
import cartContext from '../../context/cartContext';
import { useContext } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function CartWidget() {
  
  
  const { getCountInCart } = useContext(cartContext);
  
  return (
        
        <button className='cart-widget'>

            <Link to='/'>
                <BsSearch 
                  className='icon'
                />
            </Link>

             <Link to='/cart'>
                <BsBag  
                  className='icon'
                  />
                <span className='cont'> 
                    { getCountInCart() || '0' } 
                </span>
             </Link>

        </button>

  );
}

export default CartWidget;