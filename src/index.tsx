/**
 * jnetterf.github.io
 * (C) Josh Netterfield <joshua@nettek.ca> 2014-2015.
 */

/// <reference path="../typings/tsd.d.ts" />

import React = require("react");
import ReactDOM = require("react-dom");
import {Router, Route} from "react-router";
import {Provider} from "react-redux";
import Store from "./store/index";

var createBrowserHistory = require("history/lib/createBrowserHistory");

import Main from "./main";
require("./global.css");

let history = createBrowserHistory();

ReactDOM.render(
    <Provider store={Store}>
        {() => <Router history={history}>
            <Route path="/" component={Main} />
        </Router>}
    </Provider>,
    document.getElementById("root")
);
