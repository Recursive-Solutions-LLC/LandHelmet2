import React, { useState } from "react";
import helmetData from "./helmetData";
function Helmets(data) {

    const helmet = helmetData.filter(value => value.type === data.type);
    const [currentImage, setCurrentImage] = useState(helmet[0].img);

    return (<>
        <div className="container">
            <div className="row text-center">
                <div className="section-title-3">      <h1>Colors</h1>
                </div>

                <div className="col-4">

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[0].img)}>
                        <div className="man-img">
                            <img src={helmet[0].img} alt="helmet" />
                        </div>
                        <h3>{helmet[0].heading}</h3>
                       </div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[1].img)}>
                            <div className="man-img">
                                <img src={helmet[1].img} alt="helmet" />
                            </div>
                            <h3>{helmet[1].heading}</h3>  </div></div>

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[2].img)}>
                        <div className="man-img">
                            <img src={helmet[2].img} alt="helmet" />
                        </div>
                        <h3>{helmet[2].heading}</h3>
                        </div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[3].img)}>
                            <div className="man-img">
                                <img src={helmet[3].img} alt="helmet" />
                            </div>
                            <h3>{helmet[3].heading}</h3>
                           </div></div>
                </div>
                <div className="col-4">

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[4].img)}>
                        <div className="man-img">
                            <img src={helmet[4].img} alt="helmet" />
                        </div>
                        <h3>{helmet[4].heading}</h3>
                       </div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[5].img)}>
                            <div className="man-img">
                                <img src={helmet[5].img} alt="helmet" />
                            </div>
                            <h3>{helmet[5].heading}</h3>
                            </div></div>

                    <div className="row pt-5">  <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[6].img)}>
                        <div className="man-img">
                            <img src={helmet[6].img} alt="helmet" />
                        </div>
                        <h3>{helmet[6].heading}</h3>
                        </div>
                        <div className="col-6" onMouseEnter={() => setCurrentImage(helmet[7].img)}>
                            <div className="man-img">
                                <img src={helmet[7].img} alt="helmet" />
                            </div>
                            <h3>{helmet[7].heading}</h3>
                            </div></div>
                </div>
                <div className="col-4 pt-5"><div className="row">
                    <div className="col-12"> <div className="man-img">
                        <img className=" big-image" src={currentImage} alt="helmet" />
                    </div>
                        <h3>AU-{data.type}</h3></div>
                </div></div>
            </div>
        </div>
   
    </>);
}

export default Helmets;