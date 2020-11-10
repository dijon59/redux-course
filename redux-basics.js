const redux = require('redux'); // node js syntax
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        // console.log({...state, counter: state.counter + 1})
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer); // store needs to be initialzed by a reducer
console.log(store.getState())

// Subscription
// subscribe takes an argument,  a function that should be executed whenever the state is updated.
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState())
