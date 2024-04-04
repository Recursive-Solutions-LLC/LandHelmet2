import React from 'react'

function Banner({title, subtitle, image}) {

    const renderImage = image && <img src={image.src} alt={image.alt} style={{ maxWidth: '100%', height: 'auto' }} />

  return (
    <div className="d-flex ">
    <div className="col-12 col-md-6 text-md-left align-self-center">
        <div className="section-title-3">
            <h1 className="mb-4">{title}</h1>
            <h4>{subtitle}</h4>
        </div>
    </div>
    <div className="col-12 col-md-6 text-md-right">
        {renderImage}
    </div>
</div>
  )
}

export default Banner