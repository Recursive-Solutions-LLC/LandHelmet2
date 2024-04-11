import React from 'react';
import img1 from '../../assets/img/products/LOGO_page-0001.jpg'
import img2 from '../../assets/img/products/LOGO_page-0002.jpg'
import img3 from '../../assets/img/products/LOGO_page-0003.jpg'
function PageBanner2({ bannerBg }) {


    return (
        <>


            <div className="pt-5">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-5 text-center center-content">


                            <h2>You can print your custom LOGO on pre-selected areas
                                of our Safety Helmets.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-2  text-center center-content">
                            <div className='container'>
                                <div className='row  '>


                                    <div className='col-6 mt-5'>
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src={img1} alt='img1' className='border' style={{ width: '100%', display: 'block' }} />
                                            <h1 style={{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', color: 'white', background: "#73bc25", padding: '2px 8px' }}>
                                                M02
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='col-6 mt-5'>
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src={img2} alt='img1' className='border' style={{ width: '100%', display: 'block' }} />
                                            <h1 style={{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', color: 'white', background: "#73bc25", padding: '2px 8px'  }}>
                                                M12
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-offset-3  mt-5'>
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src={img3} alt='img1' className='border' style={{ width: '100%', display: 'block' }} />
                                            <h1 style={{ position: 'absolute', top: '10%', left: '10%', transform: 'translate(-50%, -50%)', color: 'white', background: "#73bc25", padding: '2px 8px' }}>
                                                M10
                                            </h1>
                                        </div>
                                    </div>
                                  


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
}

export default PageBanner2;
