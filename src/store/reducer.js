import * as actionTypes from './actions/actionTypes'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state= initialState, action) => {
    console.log(state)
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACK:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);

            console.log(updatedArray)

            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;
