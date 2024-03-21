import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Home3 from './pages/Home3';
import ProjectDetails from './pages/ProjectDetails';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import global from "./content/global"
import inhouse from "./content/inhouse"
import quality from "./content/quality"
import rd from "./content/rd"

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
                    <Route exact path="/product-details-1">
                        <ProjectDetails type={1} />
                    </Route>
                    <Route exact path="/product-details-2">
                        <ProjectDetails type={2} />
                    </Route>

                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/services-details-quality">
                        <ServicesDetails  content={global} />
                    </Route>
                    <Route exact path="/services-details-rd">
                        <ServicesDetails  content={inhouse} />
                    </Route>
                    <Route exact path="/services-details-distributor">
                        <ServicesDetails  content={quality} />
                    </Route>
                    <Route exact path="/services-details-production">
                        <ServicesDetails  content={rd} />
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
