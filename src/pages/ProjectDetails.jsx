import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';
import PortfolioDetails from '../components/PortfolioDetails';
import Hero1 from '../components/Hero1';

function ProjectDetails(data) {
    return (
        <>
            <Header1 />
            <Hero1 />I
            <PortfolioDetails type={data} />
            <Footer1 />
        </>
    );
}

export default ProjectDetails;
