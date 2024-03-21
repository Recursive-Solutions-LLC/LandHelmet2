import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';
import { FiCheck } from 'react-icons/fi';
import ReactHtmlParser from 'react-html-parser'
import PagesContent from './PagesContent';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioOneSlide from '../Portfolio1/PortfolioOneSlide';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

function DetailsContent({ type }) {

    const page = PagesContent[parseInt(type) - 1]

    return (
        <>
            {page.map((element, index) => (
                <div key={index}>

                    {element.type == 'img' && (
                        <SRLWrapper>
                            <div className="row">
                                <div className="col-12">
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </SRLWrapper>
                    )}

                    {
                        element.type == 'title+text+list(textOrImg)' && (
                            <>
                                <h2>{ReactHtmlParser(element.elements.title)}</h2>
                                <p>
                                    {ReactHtmlParser(element.elements.text)}
                                </p>
                                <ul className='mb-4'>
                                    {element.elements.list.map((listElement, listIndex) => (
                                        <li key={listIndex} className='flex items-center my-2'>
                                            {listElement.img && (
                                                <>
                                                    <SRLWrapper>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <img src={img1} alt="" />
                                                            </div>
                                                        </div>
                                                    </SRLWrapper>
                                                </>
                                            )}
                                            {!listElement.img && (
                                                <>
                                                    <h3>{listElement.title}</h3>  <p>{listElement.text}</p>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                    }
                </div >
            ))}

            < section className="portfolio-section section-padding pt-0">
                <div className="container">
                    <div className="project-wrapper">
                        <Swiper navigation className="portfolio-carousel-active owl-carousel">
                            {page.map((element, index) => (
                                <div key={index}>
                                    {element.type == 'title+text' && (
                                        <SwiperSlide >
                                            <PortfolioOneSlide
                                                style={{heigth:"100%"}}
                                                 image={element.elements.img}
                                                 imgLink={''}
                                                 link={'/contact'}
                                                 category={''}
                                                 client={''}
                                                 title={element.elements.title}
                                                 desc={element.elements.text}
                                                 btnText={'Contact'}
                                            />
                                        </SwiperSlide>
                                    )
                                    }
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section >

            <blockquote>
                Safety, Fashion and comfort combined for your ultimate head protection.
            </blockquote>
        </>
    );
}

export default DetailsContent;
