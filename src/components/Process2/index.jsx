import React from 'react';
import img1 from '../../assets/img/home3/about-3.jpg';
import img3 from '../../assets/img/home3/about-4.jpg';
import img2 from '../../assets/img/home3/about-5.jpg';
import ProcessContent from './ProcessContent';
import ProcessGrid2 from './ProcessGrid2';

function Process2() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-5 col-12 text-center">
                        <ProcessGrid2 img1={img1} img2={img2} img3={img3} />
                    </div>
                    <div className="col-xl-7 col-12 mt-5 mt-xl-0">
                        <div className="block-contents ml-xl-5 ml-50">
                            <div className="section-title-3">
                                <p className="pl-50 pr-50">Bespoke R&D</p>
                                <h1>From Concept to Your Branded Product</h1>
                            </div>
                            <ProcessContent
                                heading=" Empowering brands, our R&D tailors helmets with unique designs and safety at the forefront."
                                text="Our methodology allows us to beta test concepts in real-world scenarios, ensuring each helmet not only meets stringent safety standards but also adds significant value to our clients. Through this process, we offer the chance to create a helmet line distinctively aligned with the client’s brand, incorporating custom features, designs, and packaging."
                            />
                            <a href="/services-details-rd" className="theme-btn theme-3">
                            Discover Custom R&D Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process2;
