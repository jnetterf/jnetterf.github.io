/**
 * jnetterf.github.io
 * (C) Josh Netterfield <joshua@nettek.ca> 2014-2015.
 */
 
import invariant = require("invariant");
import {forEach, find, isEqual} from "lodash";

import {IAppState} from "../reducers/session";

export enum SessionAction {
}

export interface ISessionAction {
    type?: SessionAction;
}
