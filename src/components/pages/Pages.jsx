import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SugarReport from "../report/SugarReport"; // Import the Diet component
import PressureReport from "../report/PressureReport"; // Import the Diet component
import CardiovascularReport from "../report/CardiovascularReport"; // Import the Diet component
import Diet from "../diet/Diet"; // Import the Diet component
import Dietcv from "../diet/Dietcv"; // Import the Diet component
import Dietp from "../diet/Dietp"; // Import the Diet component

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

          <Route exact path="/diet" component={Diet} />
          <Route exact path="/dietcv" component={Dietcv} />
          <Route exact path="/dietp" component={Dietp} />

         
          <Route exact path="/Sugarreport" component={SugarReport} /> 
          <Route exact path="/Pressurereport" component={PressureReport} /> 
          <Route exact path="/Cardiovascularreport" component={CardiovascularReport} /> 


        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
