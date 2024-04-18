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

import oneStopContentI from './content/capablities/oneStopI';
import oneStopContentII from './content/capablities/oneStopII';
import oneStopContentIII from './content/global';
import helmetData from "./content/helmetData"
import brandData from "../src/content/brand"
import helmetDisplay from "../src/content/helmetDisplay"
import Product from './pages/Product';

import m10_bg from './assets/img/products/type-II/typeII_key.png';
import m12_bg from "./assets/img/products/display/m12/M12.png"
import m02_bg from "./assets/img/products/display/m02/M02.png"

function App() {

    const { m02, m10, m12 } = helmetData


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
                        <Products
                            technologyImage={m10_bg}
                            brand={
                                brandData.m10} model={m10}
                            type="m10"
                            helmetDisplay={helmetDisplay.m10}

                        />
                    </Route>
                    <Route exact path="/model-m12">
                        <Products
                            technologyImage={m12_bg}
                            brand={
                                brandData.m12} model={m12}
                            type="m12"
                            helmetDisplay={helmetDisplay.m12} />
                    </Route>
                    <Route exact path="/model-m02">
                        <Products
                            technologyImage={m02_bg}
                            brand={brandData.m02} model={m02}
                            type="m02"
                            helmetDisplay={helmetDisplay.m02} />
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
