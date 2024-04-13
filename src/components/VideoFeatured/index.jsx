import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import videoBg from '../../assets/img/home3/video_bg.jpg';
import videoFeaturedData from './videoFeaturedData';
import VideoFeaturedItem from './VideoFeaturedItem';

function VideoFeatrued() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
         
            <section className="video-featured-wrapper section-padding section-bg">
                <div className="container-fluid col-12 pl-50">
                    <div className="row align-items-center">
                        <div className=" ">
                            <div className="section-title-3 text-center pr-xl-0 mr-lg-5">
                            <h1>Applications</h1>
                            <h3>Our Type II helmet is designed for a broad range of applications, ensuring safety across different sectors</h3>
                            </div>
                
       
                            <div className="core-features-list col-12 pr-50">
                                <div className="row">
                                    {videoFeaturedData.map((data) => (
                                        <VideoFeaturedItem
                                            key={data.id}
                                            Icon={data.icon}
                                            heading={data.heading}
                                            text={data.text}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
             
            </section>
        </>
    );
}

export default VideoFeatrued;
