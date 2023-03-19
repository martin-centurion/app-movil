import { BsBag, BsSearch } from 'react-icons/bs';
import cartContext from '../../context/cartContext';
import { useContext } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function CartWidget() {
  
  const { cart } = useContext(cartContext);

  const carCount = cart.length;
  
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
                    { carCount } 
                </span>
             </Link>

        </button>

  );
}

export default CartWidget;