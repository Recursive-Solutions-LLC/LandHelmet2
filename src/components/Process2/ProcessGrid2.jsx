import React from 'react';
import IconRow from '../IconRow';

function ProcessGrid2({ img, icons }) {

    return (
        <div className="d-flex flex-column align-items-end w-100">
            <div className="featured-img bg-cover w-100" style={{ backgroundImage: `url(${img})` }} />
            <IconRow icons={icons} />
        </div>
    );
}

export default ProcessGrid2;
