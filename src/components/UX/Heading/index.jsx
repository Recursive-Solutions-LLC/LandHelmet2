import React from 'react'

export default function Heading({content}) {
    const {title,text, isDark} = content;
    
  return (
    <section className="section-padding-top services-wrapper services-2 ">
    <div className="section-title-5 text-center center-content pt-4 pb-4">

        <h1 className="">{title}</h1>
        <p className='pb-4 pt-0'>{text}</p>
    </div>

</section>
  )
}
