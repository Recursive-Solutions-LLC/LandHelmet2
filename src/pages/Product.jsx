import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';
import Hero3 from '../components/Hero2';
import Portfolio3 from '../components/Portfolio3';
import CoverAbout from '../assets/img/products/bg.png';
import PageBanner from '../components/PageBanner2';
import PageBanner3 from '../components/PageBanner3';
import TeamMembers from '../components/TeamMembers';
import SinglePost from '../components/SinglePost' ;
function Product() {

    return (
        <>
            <Header1 />
            <Hero3 />
            <Portfolio3/>
            <PageBanner bannerBg={CoverAbout} currentPage="" heading="" />
            <TeamMembers/>
            <SinglePost/>
            <PageBanner3 bannerBg={CoverAbout} currentPage="" heading="" />
            <Footer1 />
        </>
    );
}

export default Product;
