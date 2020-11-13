import * as actionTypes from './actionTypes'


// action creators
import {ADD, INCREMENT, SUBTRACK} from "./actionTypes";

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value,
    }
}

export const subtrack = (value) => {
    return {
        type: actionTypes.SUBTRACK,
        value: value,
    }
}
