import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import store from "./store";

if (document.getElementById("content")) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>,
        document.getElementById("content")
    );
}
