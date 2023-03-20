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
                  <Button onTouchButton={decrease} >
                      -
                  </Button>
                  <span className='contador'> {count} </span>
                  <Button onTouchButton={increase} >
                      +
                  </Button>
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