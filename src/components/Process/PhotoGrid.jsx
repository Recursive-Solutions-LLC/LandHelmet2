import React from 'react';
import img3 from '../../assets/img/services/AE9I5871.jpg';
import img2 from '../../assets/img/services/ambitious-professionals-of-contemporary-factory-2023-11-27-05-04-30-utc.jpg';
import img1 from '../../assets/img/services/industrial-photo-of-modern-production-line-on-fact-2023-11-27-05-15-18-utc.jpg';

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
