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
                    <section className="section-padding">
                        <div className="col-lg-12 col-12 text-center">
                            <div className="section-title-5 text-center center-content">

                                <h1 className='pb-4 pt-4'>Empower Your Brand</h1>
                                <p className='pt-4 pb-4'>Personalized Safety Helmets Capabilities where safety meets style and branding excellence, tailored specifically for your business needs!</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <div className="section-title-2  text-center center-content">
                            <h1 className='pt-5'>Your Logo, Our Helmet - A Perfect Match!</h1>
                            <div className='container '>
                                <div className='row box-padding '>


                                    <div className='col-4'>
                                        <img src={img1}  className='size-img' alt='img1' />
                                    </div>

                                    <div className='col-4'> <img src={img2} alt='img1' /></div>
                                    <div className='col-4'><img src={img3} alt='img1' /></div>

                                </div>
                                <p className=''>Land Helmets exclusively offers the option to add your logo. We do not engage in co-branding. </p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
}

export default PageBanner2;
