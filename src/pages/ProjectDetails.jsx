import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import PortfolioDetails from '../components/PortfolioDetails';

function ProjectDetails(data) {
    return (
        <>
            <Header1 />
            <PageBanner
                bannerBg={bannerBg}
                heading="Product Details"
                currentPage="Product Details"
            />
            <PortfolioDetails type={data} />
            <Footer1 />
        </>
    );
}

export default ProjectDetails;
