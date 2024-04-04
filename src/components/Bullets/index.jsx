import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Bullets({bullets}) {
    const renderBullets = bullets.map((bullet)=>{
        return(<p key={uuidv4()} className="bullet"> {bullet}</p>)
    })

  return (
    <div className="mt-2">{renderBullets}</div>
  )
}

export default Bullets