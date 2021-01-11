import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./containers/Home";

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </>
    );
};

export default Main;
