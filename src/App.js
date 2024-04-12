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


import Product from './pages/Product';

function App() {

    const {m02, m10, m12} = helmetData
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
                        <Products model={m10} type={"M10"} />
                    </Route>
                    <Route exact path="/model-m12">
                        <Products model={m12}  type={"M12"}/>
                    </Route>
                    <Route exact path="/model-m02">
                        <Products model={m02} type={"M02"} />
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
