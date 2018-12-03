import { userConstants } from "../actions/constants";

const initState = JSON.parse(localStorage.getItem('user')) || {};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.UPDATE_USER_STATE:
            debugger
            return { 
                ... state, 
                id: action.user.id,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password
            };
        default:
            return state;
    }
}

export default userReducer;