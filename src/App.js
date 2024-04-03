import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Home3 from './pages/Home3';
import ProductDetails from './pages/ProductDetailsPage';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import inHouseRd from "./content/capablities/inHouseRd"
import oneStop from "./content/capablities/oneStop"


import {productTypeIData} from "./content/ModelsTypeI"

import {productTypeIIData} from "./content/ModelsTypeII"

import ModelsTypeI from './content/ModelsTypeI';
import ModelsTypeII from './content/ModelsTypeII';

import HeroBg1 from './assets/img/products/cover.png';
import HeroBg2 from './assets/img/products/cover-II.png';

function App() {
    return (
        <>
            <Router>
                <ScrollToTopRoute />
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>

                    {/* Between this */}
                    {/* <Route exact path="/products">
                        <Projects />
                    </Route> */}
                    <Route exact path="/type-I">
                        <ProductDetails data={productTypeIData} model={ModelsTypeI} cover ={HeroBg1} />
                    </Route>
                    <Route exact path="/type-II">
                        <ProductDetails data={productTypeIIData} model={ModelsTypeII} cover ={HeroBg2} />
                    </Route>

                    <Route exact path="/capabilities">
                        <Services />
                    </Route>
                    <Route exact path="/in-house-rd">
                        <ServicesDetails  content={inHouseRd} />
                    </Route>
                    
                    <Route exact path="/one-stop-manufacturing">
                        <ServicesDetails  content={oneStop} />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                        <Home3 />
                    </Route>
                </Switch>
            </Router>
            <ScrollIndicator />
        </>
    );
}

export default App;
