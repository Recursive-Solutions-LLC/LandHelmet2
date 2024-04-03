import React from 'react';

function ProcessContent({ heading, text , bullets }) {
    
        const renderBullets = bullets.map((p,i) =>{
            return  <li className="list-group-item" key={i}>{p}</li>         
        })
  
    
    return (
        <>
            <h4>{heading}</h4>
              <p>{text}</p>
            <ul>{renderBullets}</ul>
        </>
    );
}

export default ProcessContent;
