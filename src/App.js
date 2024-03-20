import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import Team from './pages/Team';

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
                        <ServicesDetails type={1} />
                    </Route>
                    <Route exact path="/services-details-rd">
                        <ServicesDetails type={2} />
                    </Route>
                    <Route exact path="/services-details-distributor">
                        <ServicesDetails type={3} />
                    </Route>
                    <Route exact path="/services-details-production">
                        <ServicesDetails type={4} />
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
