// A reducer is a function  that gets 2 properties:
// 1. initial this.state
// 2. action  - a string  telling us what specific action this is

// {
//     type: // a defined action type
//     payload: // payload attached to out action that can be anything.
// }

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;