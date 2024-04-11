import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Home3 from './pages/Home3';
import Products from './pages/Products';
import Capabilities from './pages/Capabilities';
import CapabilitiesDetails from './pages/CapabilitiesDetails';
import CapabilitiesDetails2 from './pages/CapabilitiesDetails2';
import inHouseRd from "./content/capablities/inHouseRd"

import { productTypeIData } from "./content/ModelsTypeI"

import { productTypeIIData } from "./content/ModelsTypeII"

import ModelsTypeI from './content/ModelsTypeI';
import ModelsTypeII from './content/ModelsTypeII';

import HeroBg1 from './assets/img/products/cover.png';
import HeroBg2 from './assets/img/products/cover-II.png';
import oneStopContentI from './content/capablities/oneStopI';
import oneStopContentII from './content/capablities/oneStopII';
import oneStopContentIII from './content/global';
import Product from './pages/Product';

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
                    <Route exact path="/products">
                        <Product />
                    </Route>
                    <Route exact path="/model-m10">
                        <Products />
                    </Route>
                    <Route exact path="/model-m12">
                        <Products />
                    </Route>
                    <Route exact path="/model-m02">
                        <Products />
                    </Route>
                    <Route exact path="/capabilities">
                        <Capabilities />
                    </Route>
                    <Route exact path="/in-house-rd">
                        <CapabilitiesDetails content={inHouseRd} />
                    </Route>

                    <Route exact path="/one-stop-manufacturing">
                        <CapabilitiesDetails2 content={oneStopContentI} contentII={oneStopContentII} contentIII={oneStopContentIII} />
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
