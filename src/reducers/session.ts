/**
 * jnetterf.github.io
 * (C) Josh Netterfield <joshua@nettek.ca> 2014-2015.
 */

import {extend, omit} from "lodash";

import {ISessionAction as ISA, SessionAction as SA} from "../actions/session";

export interface IAppState {
}

let _reducers: {[key: string]: ((state: IAppState, action: ISA) => IAppState)} = {};

export function reducer(state: IAppState, action: ISA) {
    if (action.type in _reducers) {
        return _reducers[action.type](state, action);
    }
    return state || {};
}
