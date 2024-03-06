import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Report from "../report/Report"; // Import the Diet component
import Diet from "../diet/Diet"; // Import the Diet component

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />    
          <Route exact path="/contact" component={Contact} />
          {/* Add the route for the diet page */}
          <Route exact path="/report" component={Report} />
          <Route exact path="/diet" component={Diet} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
