import React from 'react';

function ProcessContent({ heading, text , bullets }) {
    
        const renderBullets = bullets.map((p,i) =>{
            return  <li className="bullet" key={i}>{p}</li>         
        })
  
    
    return (
        <>
            <p className="block-contents-text">{heading}</p>
              {text && <p className="block-contents-text">{text}</p>}
            <ul > {renderBullets}</ul>
        </>
    );
}

export default ProcessContent;
