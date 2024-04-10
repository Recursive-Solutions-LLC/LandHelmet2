import React from 'react';
import img1 from '../../assets/img/products/PROFF LOGO.png'
import img2 from '../../assets/img/products/PROFF LOGO (2).png'
import img3 from '../../assets/img/products/PROFF LOGO (3).png'
function PageBanner2({ bannerBg }) {


    return (
        <>   <section
            className="page-banner-wrap2 bg-cover"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >


        </section>


            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-5 text-center center-content">

                            <h1>EMPOWER YOUR BRAND</h1>
                            <h2>Personalized Safety Helmets Capabilities where safety meets style and branding excellence, tailored specifically for your business needs!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-2  text-center center-content">
                        <h1 className='pt-5'><strong>YOUR LOGO, OUR HELMET - A PERFECT MATCH!</strong></h1>
                            <div className='row logos-padding '>

                  
                                <div className='col-4'>
                                    <img src={img1} alt='img1' />
                                </div>

                                <div className='col-4'> <img src={img2} alt='img1' /></div>
                                <div className='col-4'><img src={img3} alt='img1' /></div>
                                <h2 className=''><strong>Land Helmets </strong>exclusively offers the option to add your logo. We do not engage in co-branding. </h2>
                       
                                    </div>
                                  
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
}

export default PageBanner2;
