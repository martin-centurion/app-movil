import { useState } from "react";
import Button from "../Button/Button";
import './styles.css';

const ItemCount = ({ initial, stock, onAddToCart }) => {
    const [count, setCount] = useState(initial);
  
    const decrease = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    };
  
    const increase = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    return (
      <div className='bot'>
  
          <div className='bot__content'>
            <div className='bot__content-contador'>
                  <button onClick={decrease} >
                      -
                  </button>
                  <p className='contador'> {count} </p>
                  <button onClick={increase} >
                      +
                  </button>
            </div>
            <div className='bot__content-bot'>
                <Button className='bot_add' 
                onTouchButton={() => onAddToCart(count)}>
                Comprar
                </Button>
            </div>
              
          </div>
  
      </div>
    );
};
export default ItemCount;