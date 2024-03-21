import FaqAccordion from '../FaqAccordion';

const DetailsAccordion = ({title,text, list})=>  {

    console.log('%csrc/components/ServiceDetails/DetailsAccordion.jsx:5 Object', 'color: white; background-color: #007acc;', Object);
   const renderAccordion = list.map((element)=>{
        const {title, text} = element

        return  (<FaqAccordion key={title} question={title} answer={text} />)
    })

    return(
    <div className="faq-content pl-0 pl-md-4">
        <h2>{title}</h2>
        <p>{text}</p>
        {renderAccordion}
    </div>)
}

export default DetailsAccordion