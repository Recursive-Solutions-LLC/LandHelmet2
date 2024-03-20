import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import detailsCardData from './detailsCardData';
import PortfolioDetailsCard from './PortfolioDetailsCard';
import PortfolioGallery from './PortfolioGallery';
import productAccesoriesCardData from './productAccesoriesCardData';
import ProductAccesoriesCard from './ProductAccesoriesCard';

import galleryImg1 from '../../assets/img/lh-01/image6.jpeg';
import galleryImg2 from '../../assets/img/lh-01/image7.jpeg';
import galleryImg3 from '../../assets/img/lh-01/image17.jpeg';
import thumb from '../../assets/img/LHD-1/2.png';
// import mainFeatureImg1 from '../../assets/img/lh-01/image9.png';
import mainFeatureImg1 from '../../assets/img/LHD-1/3.png';
import detachablePatentImg from '../../assets/img/lh-01/image19.png';
import detachabeAdjustmentImg from '../../assets/img/lh-01/image18.png';
import plasticInjectionMoldingImg from '../../assets/img/lh-01/image20.png';
import accesoriesImg01 from '../../assets/img/LHD-1/4.png';
import eppsInMoldImg1 from '../../assets/img/lh-01/image21.jpeg';
import eppsInMoldImg2 from '../../assets/img/lh-01/image22.png';
import solProviderStep1Img from '../../assets/img/lh-01/image23.png';
import solProviderStep2Img from '../../assets/img/lh-01/image24.jpeg';
import solProviderStep3Img from '../../assets/img/lh-01/image25.png';
import solProviderStep4Img from '../../assets/img/lh-01/image26.jpeg';
import solProviderStep5Img from '../../assets/img/lh-01/image27.jpeg';
import extraProvider1 from '../../assets/img/lh-01/image29.png';
import extraProvider2 from '../../assets/img/lh-01/image28.png';
import extraProvider3 from '../../assets/img/lh-01/image30.png';
import extraProvider4 from '../../assets/img/lh-01/image31.png';
import extraProvider5 from '../../assets/img/lh-01/image32.png';
import extraProvider6 from '../../assets/img/lh-01/image33.png';
import customizationImg1 from '../../assets/img/lh-01/image45.png';
import customizationImg2 from '../../assets/img/lh-01/image43.png';
import customizationImg3 from '../../assets/img/lh-01/image44.png';

function PortfolioDetails() {
    const solProvider = [
        {
            image: solProviderStep1Img,
            title: 'In - House R&D ',
            id: uuidv4(),
        },
        {
            image: solProviderStep2Img,
            title: 'Expert Collaboration',
            id: uuidv4(),
        },
        {
            image: solProviderStep3Img,
            title: 'Prototype',
            id: uuidv4(),
        },
        {
            image: solProviderStep4Img,
            title: 'Cutting-Edge Facilities',
            id: uuidv4(),
        },
        {
            image: solProviderStep5Img,
            title: 'Integrated Manufacturing',
            id: uuidv4(),
        }
    ];

    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div
                            className="project-thumb bg-cover"
                            style={{
                                backgroundImage: `url(${thumb})`,
                            }}
                        />
                        <div className="project-details-content">
                            <div>
                                <p>
                                    We proudly operate under the sponsorship of Aurora Sports, we are a direct factory in China strategically located in Orange County, California. We specialize in premium Safety Helmets (SEI Certified).<br/>
                                    We are a one-stop, integrated manufacturing operation that has successfully built strong relationships with satisfied clients worldwide and manufactured helmets for wholesalers, branded helmet companies, and manufacturers.<br/>
                                    We can offer a highly competitive rate without compromising on quality. This provides excellent value for achieving cost-effective solutions.<br/>
                                </p>
                            </div>
                            <div className="row">
                                <PortfolioGallery galeryImg={galleryImg1} />
                                <PortfolioGallery galeryImg={galleryImg2} />
                                <PortfolioGallery galeryImg={galleryImg3} />
                            </div>

                            <h3 className='text-center'>Introducing M12 Safety Helmet</h3>

                            <p>
                                Multi-Impact Protection: Meets ANSI Z891.1-2014 (R2019), EN 397, and EN12492 for versatile head protection.<br/>
                                Long-Lasting Reliability: 10-year lifespan for enduring protection.<br/>
                                Robust Shell: ABS Advanced Alloy Material Shell for durability.<br/>
                                Adjustable Rachet System: Replaceable accessories and easy to use even with a gloved hand.
                            </p>

                            <h3 className='text-center'>Main Features</h3>
                            <div className="row">
                                <div className="col">
                                    <img src={mainFeatureImg1} className='mx-auto d-block' />
                                </div>
                            </div>
                            <p>
                                Meets ANSI Z891.1-2014 (R2019), EN 397, and EN12492 for versatile head protection.<br/>
                                Model Number: PPE Safety Helmet AU-M12.<br/>
                                OEM/ODM: Available.<br/>
                                Extended Options: Headlamp, Earmuff, Goggle, Iron Mesh Visor.<br/>
                                Lightweight Shell of ABS material + EPS foam + Webbing + Suspension System.<br/>
                                Strong Ventilation System: It comes with 8 air intakes which provide efficient cooling and ventilation.<br/>
                                Due to its unique double-pivot design, the up-n-down adjustment system gives any helmet the most precise and comfortable fitting.
                            </p>

                            {/* <h3 className='text-center'>Accessories</h3> */}
                            <div className="row">
                                {/* {productAccesoriesCardData.map(data => (
                                    <ProductAccesoriesCard image={data.image}
                                        key={data.id}
                                        title={data.title} />
                                ))} */}
                                <img src={accesoriesImg01} className='' />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h3>DETACHABLE PATENT ACCESORIES</h3>
                                    <img src={detachablePatentImg} alt='DETACHABLE PATENT ACCESORIES' />
                                    <p>The fourth sides of headlamp buckles and slots can be used to install accessories to protect our full face. Wearers can choose to install different accessories on different occasions, including goggles, ear muffs, face masks, headlights, and so on. We are also able to provide accessories and help customers specify individually tailored feasible solutions and designs according to their needs.</p>
                                </div>
                                <div className="col">
                                    <h3>DETACHABLE PATENT  ADJUSTMENT</h3>
                                    <img src={detachabeAdjustmentImg} alt='DETACHABLE PATENT  ADJUSTMENT' />
                                    <p>A detachable and replaceable patent headlock provides the perfect adjustment, if the headlock is broken after using a long time, it can be replaced by a new headlock immediately. No need to worry about the complicated and unsatisfied after-sale service like brands.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h3>PLASTIC INJECTION MOLDING</h3>
                                    <img src={plasticInjectionMoldingImg} 
                                        alt='PLASTIC INJECTION MOLDING' 
                                        className='rounded img-thumbnail h-25 mx-auto d-block'/>
                                    <p>Advantage: Injection molding is the most common modern method of manufacturing plastic parts; it is ideal for producing high volumes of the same object. High efficiency and precision, can realize automation operations. The products can be shaped from simple to complex, from small to big.<br/>What’s more, the injection products are easier to upgrade. The technology is suitable for mass production with complex shape products and processing fields. The mold lifetime is long, this cycle time is short.</p>
                                </div>
                                <div className="col">
                                    <h3>EPS IN-MOLD TECHNOLOGY</h3>
                                    <div className='row'>
                                        <div className='col'>
                                            <img src={eppsInMoldImg1} 
                                                className='rounded img-thumbnail h-75'/>
                                        </div>
                                        <div className='col'>
                                            <img src={eppsInMoldImg2} 
                                                className='rounded img-thumbnail h-75'/>
                                        </div>
                                    </div>
                                    <p>In-mold is the best current production technology for making ultra-lightweight helmets with a high level of firmness and maximum protection.<br />Injecting EPS (expandable polystyrene) foam directly into the PolyCarbonate shell in one operation created by pressure, heat, and steam. PC shell is vacuum-formed to the correct shape before the in-mold process. It also prevents the shell from separating from the foam liner and offers better transferring of impact force to the foam insert.</p>
                                </div>
                            </div>

                            <h3 className='text-center'>Your Helmet Solution Provider</h3>
                            <div className='row'>
                                {solProvider.map(data => (
                                    <ProductAccesoriesCard image={data.image}
                                        key={data.id}
                                        title={data.title} />
                                ))}
                            </div>
                            <p>Our highly capable in-house R&D team is equipped with state-of-the-art technology, including 3D scanning, rapid prototyping, and a top-notch testing lab, significantly accelerating innovation and product development.<br />Always keenly aware of the latest trends in helmet design, our professional designers produce nearly 400 uniquely styled new helmet models every year for our broad clientele to choose from.</p>

                            <div className="row">
                                <div className="col">
                                    <h3>LOGO/STICKER PRINTING WORKSHOP</h3>
                                    <img src={extraProvider1} className='h-25' />
                                    <img src={extraProvider2} className='h-25' />
                                </div>
                                <div className="col">
                                    <h3>HELMET ASSEMBLY</h3>
                                    <img src={extraProvider3} className='h-50' />
                                </div>
                                <div className="col">
                                    <h3>HELMET PACKAGING</h3>
                                    <img src={extraProvider4} className='h-25' />
                                    <img src={extraProvider5} className='h-25' />
                                </div>
                                <div className="col">
                                    <h3>PACKAGE DESIGN</h3>
                                    <img src={extraProvider6} className='h-50' />
                                </div>
                            </div>

                            <div className="row g-0">
                                <div className="col">
                                    <h3 className='text-center'>CUSTOMIZATION</h3>
                                    <p>Print your company logo prominently on the front or side for maximum visibility.</p>
                                    <img src={customizationImg1} />
                                </div>
                                <div className='col'>
                                    <img src={customizationImg2} />
                                </div>
                                <div className='col'>
                                <img src={customizationImg3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default PortfolioDetails;
