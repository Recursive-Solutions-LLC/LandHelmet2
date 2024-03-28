import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';
import ProductDetailsSection from '../components/ProductDetails';
import Hero1 from '../components/Hero1';

function ProductDetails(data) {
    return (
        <>
            <Header1 />
            <Hero1 />
            <ProductDetailsSection type={data} />
            <Footer1 />
        </>
    );
}

export default ProductDetails;
