import FaqAccordion from '../FaqAccordion';
import { motion } from "framer-motion"
import { SRLWrapper } from 'simple-react-lightbox';

const DetailsAccordion = ({ title, text, list }) => {

    console.log('%csrc/components/ServiceDetails/DetailsAccordion.jsx:5 Object', 'color: white; background-color: #007acc;', Object);
    const renderAccordion = list.map((element) => {
        if (element.img) return (
            <SRLWrapper>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={element.img} alt="" />
                    </div>
                </div>
            </SRLWrapper>
        )      
    const { title, text } = element
    return (<FaqAccordion key={title} question={title} answer={text} />)
})

return (
    <div className="faq-content pl-0 pl-md-4">
        <h2>{title}</h2>
        <p>{text}</p>
        {renderAccordion}
    </div>)
}

export default DetailsAccordion