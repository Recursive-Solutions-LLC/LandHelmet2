import React from 'react'
import "./app.scss"
import timelineData from "./timeLineData"
const Timeline2 = () =>  {
  
    
    const TimelineItem = ({ data }) => (
          
        <div className="timeline-item">
         
            <div className="timeline-item-content single-time-line ">
            <div className="icon">{data.icon}</div>
         
                <h2>{data.year}</h2>
           
        
                <div className="content">
                <h4>{data.heading}</h4>
                <p>{data.text}</p>
            </div>
               
                <span className="circle" />
            </div>
        </div>
    );

    // Directly return the JSX of the Timeline
    return (
        <div className="timeline-container">
            {timelineData.length > 0 && timelineData.map((data, index) => (
                <TimelineItem data={data} key={index} />
            ))}
        </div>
    );
};
    export default Timeline2;