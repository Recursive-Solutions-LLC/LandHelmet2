import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

 function Btn({content}) {
  const { link, hasArrow, type, call_to_action} = content;

    const renderArrow = hasArrow && <BsArrowRight />
    
    const buttonClass =  "theme-btn theme-"+type; 


  return (
    <Link to={link} className={buttonClass}>
                {call_to_action} 
                {renderArrow}
              </Link>
  )
};

export  default Btn
