import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';
import Hero3 from '../components/Hero2';
import Portfolio3 from '../components/Portfolio3';
import CoverAbout from '../assets/img/products/bg.jpg';
import PageBanner from '../components/PageBanner2';
import TeamMembers from '../components/TeamMembers';
function Product() {

    return (
        <>
            <Header1 />
            <Hero3 />
            <Portfolio3/>
            <PageBanner bannerBg={CoverAbout} currentPage="" heading="" />
            <TeamMembers/>
            <Footer1 />
        </>
    );
}

export default Product;
