import React from 'react';
import { RaceBy } from '@uiball/loaders';
import './styles.css';



function Loader() {

  return (
    <div className='loader'>
          <RaceBy 
                size={80}
                lineWeight={5}
                speed={1.4} 
                color="black" 
          />
    </div>
  )
}

export default Loader