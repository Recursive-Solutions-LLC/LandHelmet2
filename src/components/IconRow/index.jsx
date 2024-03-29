import React from 'react';

const IconRow = ({ icons }) => {

  const renderIcons = icons.map((Icon, index) => (
    <div key={index} className='icon-style m-2'>
      {typeof Icon === 'function' ? <Icon /> : <img src={Icon} alt={`Icon ${index}`} />}
    </div>
  ))
  return (
    <div className="d-flex flex-row justify-content-start">
      {renderIcons}
    </div>
  );
};

export default IconRow;
