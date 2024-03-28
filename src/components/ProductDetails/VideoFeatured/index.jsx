import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import VideoFeaturedItem from './VideoFeaturedItem';
import icon1 from '../../../assets/img/icon/factory.png';
import ServicesThreeCard from '../Services3/ServicesThreeCard';

function VideoFeatrued({  data }) {
    const [isOpen, setOpen] = useState(false);
    
    const { 
        applications, 
        whyToChoose
    } = data
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="EZ9DrY43wtw"
                onClose={() => setOpen(false)}
            />
            <section className="video-featured-wrapper section-padding section-bg">
                <div className="container-fluid pl-xl-5 pl-50">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-12 ">
                            <div className="section-title-3 pr-xl-0 mr-lg-5">
                                <h1 className='text-center'>
                                    {applications.title}
                                </h1>
                                <h6 className='text-center'>{applications.text}</h6>
                            </div>

                            <div className="core-features-list pr-xl-5 pr-50">
                                <div className="row">
                                    {
                                        applications.options.map((element, index) => (
                                            <VideoFeaturedItem key={index}
                                                icon={icon1}
                                                heading={element.title}
                                                text={element.text}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ServicesThreeCard thumb={whyToChoose.image} 
                heading={whyToChoose.title}
                text={whyToChoose.text}
            />
        </>
    );
}

export default VideoFeatrued;
