import FaqAccordion from '../FaqAccordion';
import { SRLWrapper } from 'simple-react-lightbox';

const DetailsAccordion = ({ title, text, list }) => {

    const renderAccordion = list.map((element) => {
        const { title, text, img } = element
        return (
            <div>
                {img && (
                    <div className='flex flex-row' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="col-md-6 col-12" >
                            <SRLWrapper>
                                <div className="">
                                        <img src={element.img} alt="" />
                                </div>
                            </SRLWrapper>
                        </div>
                        <div className="col-md-6 col-12">
                            <FaqAccordion key={title} question={title} answer={text} />
                        </div>
                    </div>
                )}
                {!img && (
                    <FaqAccordion key={title} question={title} answer={text} />
                )}
            </div>

        )
    })

    return (
        <div className="faq-content pl-0 pl-md-4">
            <h2>{title}</h2>
            <p>{text}</p>
            {renderAccordion}
        </div>)
}

export default DetailsAccordion