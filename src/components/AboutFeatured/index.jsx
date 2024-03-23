import React from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import aboutImg from '../../assets/img/about_us.jpg';
import IconBox from './IconBox';
import TypeI from "../../assets/img/icon/helmet-types/typeI.svg"
import TypeII from "../../assets/img/icon/helmet-types/typeI.svg"

function AboutFeatured() {


    const renderIcon = (src, alt) =>{
        return(
            <img src={src} alt={alt} />
        )
    }

    const renderTypeI= renderIcon(TypeI,"helmet type I");
    const renderTypeII= renderIcon(TypeII,"helmet type II");

    const title = "Located in Orange County, California."
    const subtitle = "Proudly operating under the sponsorship of Aurora Sports"
    const subtitle2 = "Welcome to Land Helmets, your premier destination for premium Safety Helmets Type I and Type II (SEI Certified)."

    const helmet = [
        {
            heading: "",
            text: ""
        },
        {
            heading: "",
            text: ""
        }
    ]

    return (

            <section className="about-featured-wrapper section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-12">
                            <div
                                className="about-promo bg-cover"
                                style={{ backgroundImage: `url(${aboutImg})` }}
                            />
                        </div>

                        <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                            <div className="block-contents ml-lg-5">
                                <span>{subtitle}</span>
                                <h1>{title}</h1>
                                <h4>
                                   {subtitle2}
                                </h4>
                            </div>

                            <div className="icon-boxs ml-lg-5">
                                <IconBox
                                    icon={renderTypeI }
                                    heading={helmet[0].heading}
                                    text={helmet[0].text}
                                />
                                <IconBox
                                    icon={renderTypeII} 
                                    heading={helmet[1].heading}
                                    text={helmet[1].text}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default AboutFeatured;
