import React from 'react';
import blogOneData from './BlogOneData';

import thumb1 from '../../assets/img/products/colors.png';
function Blog1() {
    return (
        <section className="blog-section pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                      
                            <h1>PANTONE COLOR MATCHING</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-12">
                <div className="single-blog-card">
                    <div
                        className="featured-img bg-cover"
                        style={{
                            backgroundImage: `url(${thumb1})`,
                        }}
                    />
                    <div className="post-content text-center">
                      
                       
                        <h3>
                        Pantone colors are a part of a Color Matching System, or CMS, which is a method used to ensure that colors remain as consistent as possible, regardless of the device/medium displaying the color. Land Helmets offers a number of Pantone stock colors for each imprinting method, selected by which were most commonly ordered. You can select the closest stock color to your customers colors for no additional fee.
                        </h3>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </section>
    );
}

export default Blog1;
