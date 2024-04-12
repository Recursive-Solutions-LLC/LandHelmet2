import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';
import TeamMembers2 from '../components/TeamMembers3'

function Products(data) {
    return (
        <>
            <Header3 />

            {/* <PageBanner bannerBg={image} /> */}
            <Faq/>
            <Helmets  {...data} />
            <TeamMembers2  {...data} />
            <Footer3 />
        </>
    );
}

export default Products;
