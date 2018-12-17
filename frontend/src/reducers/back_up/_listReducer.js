import { listConstants } from "../actions/constants";

const initState = {};

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case listConstants.ADD_LIST: 
            // const { titel, listID, listOfCardIDs } = action.payload;
            // return {
            //     ...state,
            //     [listID]: {
            //         listID: listID,
            //         titel: titel,
            //         listOfCardIDs: listOfCardIDs
            //     }
            // }
        default:
            return state;
    }
}

export default listReducer;