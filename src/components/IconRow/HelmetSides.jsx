import React from 'react';
import {Model02Sides} from "../../content/ModelsTypeI"
import {Model12Sides} from "../../content/ModelsTypeI"
import {Model10Sides} from "../../content/ModelsTypeII"

const HelmetSides = ({ model }) => {

 
 
  const filterIcons = ()=>{
    if(model === "m02") {
      return Model02Sides
    }
    if(model === "m12") {
      return Model12Sides
    }
    if(model === "m10") {
      return Model10Sides
    }
  }

const icons = filterIcons()

const renderIcons = icons && icons.map((Icon, index) => {
   return (
      <div key={index} className='icon-style-helmet'>
          <img src={Icon} alt={`Icon ${index}`}/>
      </div>
    )
  })
  return (
    <div className="d-flex flex-row justify-content-around mt-5">
      {renderIcons}
    </div>
  );
};

export default HelmetSides;
