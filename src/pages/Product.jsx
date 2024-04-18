import React from 'react';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header3';

import Hero4 from '../components/Hero4';
import Portfolio3 from '../components/Portfolio3';
import CoverAbout from '../assets/img/products/bg.png';
import PageBanner from '../components/PageBanner2';
import PageBanner3 from '../components/PageBanner3';
import TeamMembers from '../components/TeamMembers';
import SinglePost from '../components/SinglePost' ;
import hero5 from '../assets/img/products/hero1.jpg';
import hero6 from '../assets/img/products/hero2.jpg';

import hero17 from '../assets/img/products/hero3.jpg';

import hero20 from '../assets/img/products/hero4.jpg';
function Product() {
const images = [hero5, hero6 , hero17, hero20]
    return (
        <>
            <Header1 />
   
            <Hero4 images={images}/>
            <section className='pt-5'>
            <Portfolio3 />
            </section>
          
            <PageBanner bannerBg={CoverAbout} currentPage="" heading="" />
            <TeamMembers/>
            <SinglePost/>
            <PageBanner3 bannerBg={CoverAbout} currentPage="" heading="" />
            <Footer1 />
        </>
    );
}

export default Product;
