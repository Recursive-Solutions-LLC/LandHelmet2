import React from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import Bullets from "../Bullets"
function AboutFeatured({ aboutContent }) {
    const { title, subtitle, texts, right, aboutImg, bullets } = aboutContent;

    // Determine the order of the columns based on the 'right' property
    const imageColumnClass = right ? "order-lg-2" : "";
    const textColumnClass = right ? "order-lg-1" : "";
    const isBullets = bullets !== undefined

    const renderBulletsContainer =isBullets && <Bullets bullets={bullets}/>


const renderTexts = texts.map ((text)=>{
    return(   <h4>
        {text}

    </h4>)
})

    return (
        <section className="about-featured-wrapper pt-5 mt-5">
            <div className="container">
                <div className="row ">
                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-6 col-12 ${imageColumnClass}`}>
                        <div
                            className="about-promo bg-cover"
                            style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: "contain" ,backgroundPosition: "center",backgroundRepeat:"no-repeat" }}
                        />
                    </div>

                    {/* Adjust the order of this column based on 'right' */}
                    <div className={`col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 ${textColumnClass}`}>
                        <div className="block-contents ml-lg-5">
                           <h1>{title}</h1>
                            <span>{subtitle}</span>
                     
                            {renderTexts}
                            {renderBulletsContainer}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutFeatured;
