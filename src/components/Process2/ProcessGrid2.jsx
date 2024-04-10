import React from 'react';
import IconRow from '../IconRow';

function ProcessGrid2({ img1, icons }) {

    return (
        <div className="featured-img bg-cover relative" style={{ backgroundImage: `url(${img1})` }}>
         {img1 &&  <div className="bottom-img bg-cover" style={{ backgroundImage: `url(${img1})` }} />}

         <div className="absolute">
         <IconRow icons={icons}/>
         </div>
        </div>
    );
}

export default ProcessGrid2;
