import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';
import { FiCheck } from 'react-icons/fi';
import ReactHtmlParser from 'react-html-parser'
import PagesContent from './PagesContent';

function DetailsContent({ type }) {
    
    const page = PagesContent[parseInt(type)-1]

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

                    {element.type == 'title+text' && (
                        <>
                            <h2>{ReactHtmlParser(element.elements.title)}</h2>
                            <p>
                                {ReactHtmlParser(element.elements.text)}
                            </p>
                        </>
                    )}

                    {element.type == 'title+text+list(textOrImg)' && (
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
                    )}
                </div>
            ))

            }
            <blockquote>
                Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug
                pitchfork post-ironic.
            </blockquote>
        </>
    );
}

export default DetailsContent;
