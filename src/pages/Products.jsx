import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';
import TeamMembers2 from '../components/TeamMembers3'

function Products({model, type}) {

    const {cover, variants} = model
    return (
        <>
            <Header3 />

            {/* <PageBanner bannerBg={image} /> */}
            <Faq/>
            <Helmets cover={cover} variants={variants} type={type} />
              <TeamMembers2  type={type} />
            <Footer3 />
        </>
    );
}

export default Products;
