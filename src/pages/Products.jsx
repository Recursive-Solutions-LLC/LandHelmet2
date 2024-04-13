import React from 'react';
import Footer3 from '../components/Footer1';
import Header3 from '../components/Header3';
import Faq from '../components/Faq3';
import Helmets from '../components/Helmets';
import FullBanner from '../components/Banner/FullBanner';

function Products({model, type}) {

    const {cover, variants, banner} = model
    return (
        <>
            <Header3 />

            <FullBanner banner={banner} />
            <Faq/>
            <Helmets cover={cover} variants={variants} type={type} />
            <Footer3 />
        </>
    );
}

export default Products;
