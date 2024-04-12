import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';


function Products(data) {
    return (
        <>
            <Header3 />

            {/* <PageBanner bannerBg={image} /> */}
            <Faq/>
            <Helmets  {...data} />
            <Footer3 />
        </>
    );
}

export default Products;
