/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import CategoryBtn from '../ProjectFilter/CategoryBtn';
import FilterItem from '../ProjectFilter/FilterItem';
import projectFilterTwoData from './projectFilterTwoData';

function ProjectFilter2() {
    // STATES
    const [category, setCategory] = useState('all');
    const [filteredItem, setFilteredItem] = useState([]);

    useEffect(() => {
        category === 'all'
            ? setFilteredItem(projectFilterTwoData)
            : setFilteredItem(projectFilterTwoData.filter((data) => data.category === category));
    }, [category]);

    return (
        <section className="portfolio-wrapper-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="section-title-3">
              
                           <p>Our Services</p>
                           <h1>We are capable for mass production </h1>
                            <h4>A comprehensive solution, offering both open mold options and the ability to create custom designs tailored to your needs</h4>
                        </div>
                    </div>
                </div>


                <div className="row grid text-center" >
                    {filteredItem.map(
                        (item, length) =>
                            length <= '3' && (
                                <FilterItem
                                    key={item.id}
                                    image={item.image}
                                    price={item.price}
                                    name={item.name}
                                    heading={item.heading}
                                    category={item.category}
                                />
                            )
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProjectFilter2;
