import { boardConstants } from "../actions/constants";

const initState = {};

const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_BOARD': {
            const { titel, boardID, owner, listOfListIDs } = action.payload;
            return {
                ...state,
                [boardID]: {
                    boardID: boardID,
                    titel: titel,
                    listOfListIDs: listOfListIDs,
                    owner: owner
                }
            }
        }
        default:
            return state;
    }
}

export default boardReducer;