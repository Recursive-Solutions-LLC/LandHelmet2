import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';
import ProductDetailsSection from '../components/ProductDetails';
import Hero1 from '../components/Hero1';


function ProductDetailsPage({data, model, cover}) {


    return (
        <>
            <Header1 />
            <Hero1 cover={cover} />
            <ProductDetailsSection data={data} model={model} />
            <Footer1 />
        </>
    );
}

export default ProductDetailsPage;
