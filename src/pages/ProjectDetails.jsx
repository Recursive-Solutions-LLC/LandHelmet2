import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer3';
import Header1 from '../components/Header3';
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
