import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7974090731714!2d-118.02898198844616!3d33.8175408299748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2f55a1453e31%3A0x5071f95e3a357f2d!2sLand%20Helmets%20%2F%20GTC%20Land%20Sports%20INC!5e0!3m2!1ses-419!2sus!4v1711026326727!5m2!1ses-419!2sus"
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
                key={"myKey"}
            />
        </div>
    );
}

export default Map;
