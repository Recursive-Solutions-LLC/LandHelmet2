import React, { useState } from "react";
import helmetData from "./helmetData";
function Helmets(data) {

    const helmet = helmetData.filter(value => value.type === 'm02');
    const [currentImage, setCurrentImage] = useState(helmet[0].img);
  console.log(currentImage)
    return (<>
        <div className="container">
            <div className="row text-center">
                <h1>Colors</h1>
                <div className="col-4">

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[0].img)}>
                        <div className="man-img">
                            <img src={helmet[0].img} alt="helmet" />
                        </div>

                        {helmet[0].heading}</div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[1].img)}>
                            <div className="man-img">
                                <img src={helmet[1].img} alt="helmet" />
                            </div>
                            {helmet[1].heading}</div></div>

                    <div className="row">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[2].img)}>
                        <div className="man-img">
                            <img src={helmet[2].img} alt="helmet" />
                        </div>
                        {helmet[2].heading}</div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[3].img)}>
                            <div className="man-img">
                                <img src={helmet[3].img} alt="helmet" />
                            </div>
                            {helmet[3].heading}</div></div>
                </div>
                <div className="col-4">

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[4].img)}>
                        <div className="man-img">
                            <img src={helmet[4].img} alt="helmet" />
                        </div>

                        {helmet[4].heading}</div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[5].img)}>
                            <div className="man-img">
                                <img src={helmet[5].img} alt="helmet" />
                            </div>
                            {helmet[5].heading}</div></div>

                    <div className="row">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[6].img)}>
                        <div className="man-img">
                            <img src={helmet[6].img} alt="helmet" />
                        </div>
                        {helmet[6].heading}</div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[7].img)}>
                            <div className="man-img">
                                <img src={helmet[7].img} alt="helmet" />
                            </div>
                            {helmet[7].heading}</div></div>
                </div>
                <div className="col-4 pt-5"><div className="row">
                    <div className="col-12"> <div className="man-img">
                                <img className=" big-image" src={currentImage} alt="helmet" />
                            </div>
                           <h3>AU-M02</h3></div>
                </div></div>
            </div>
        </div>
    </>);
}

export default Helmets;