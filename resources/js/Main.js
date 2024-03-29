import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./containers/Checkout";
import FitToFly from "./containers/FitToFly";
import Home from "./containers/Home";
import PaymentRedirect from "./containers/PaymentRedirect";
import Vaccination from "./containers/Vaccination";

const Main = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/fittofly" component={FitToFly} />
                <Route path="/vaccination" component={Vaccination} />
                <Route
                    path="/success"
                    component={(props) => (
                        <PaymentRedirect {...props} success={true} />
                    )}
                />
                <Route
                    path="/cancel"
                    component={(props) => (
                        <PaymentRedirect {...props} success={false} />
                    )}
                />
            </Switch>
        </>
    );
};

export default Main;
