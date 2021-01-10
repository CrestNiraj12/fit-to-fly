import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

if (document.getElementById("content")) {
    ReactDOM.render(
        <Router>
            <Main />
        </Router>,
        document.getElementById("content")
    );
}
