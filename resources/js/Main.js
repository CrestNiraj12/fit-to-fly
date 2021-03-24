import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./containers/Checkout";
import Home from "./containers/Home";
import PaymentRedirect from "./containers/PaymentRedirect";

const Main = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/checkout" component={Checkout} />
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
