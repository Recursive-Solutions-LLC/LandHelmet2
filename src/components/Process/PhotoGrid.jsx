import React from 'react';
import img3 from '../../assets/img/capabilities/AE9I5871.jpg';
import img2 from '../../assets/img/capabilities/worker_in_factory.jpg';

function PhotoGrid() {
    return (
        <div className="col-xl-5 col-12">
            <div className="photo-style-grid">
                <div
                    className="main-img bg-cover"
                    style={{
                        backgroundImage: `url(${img2})`,
                    }}
                />
                <div
                    className="bottom-img bg-cover"
                    style={{
                        backgroundImage: `url(${img3})`,
                    }}
                />
            </div>
        </div>
    );
}

export default PhotoGrid;
