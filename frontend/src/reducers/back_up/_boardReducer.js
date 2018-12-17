import { boardConstants } from "../actions/constants";

const initState = {
    loading: false,
    error: null,
    boards: null,
    currentBoard: null
};

const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case boardConstants.CREATE_BOARD_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case boardConstants.CREATE_BOARD_SUCCESS: {
            const {boardID, titel,} = action.payload;
            return {
                ...state,
                loading: false,
                boards: {
                    ...state.boards, 
                    [boardID]: {
                        boardID : boardID,
                        titel: titel,
                        listOfListIDs: [],
                        users: [email]
                    }
                }
            }
        }
        case boardConstants.CREATE_BOARD_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case boardConstants.GET_BOARDS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        };
        case boardConstants.GET_BOARDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                boards: action.payload
            }
        };
        case boardConstants.GET_BOARDS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case boardConstants.GET_BOARD_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case boardConstants.GET_BOARD_SUCCESS: {
            return {
                ...state,
                loading: false,
                currentBoard: action.payload
            }
        }
        case boardConstants.GET_BOARD_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case boardConstants.CHANGE_BOARD_TITLE: {
            return {
                ...state,
                currentBoard: {
                    ...state.currentBoard,
                    titel: action.payload
                }
            }
        }
        case boardConstants.ADD_LIST_TO_BOARD: {
            const { boardID, }
            return {
                ...state,
                currentBoard: {
                    ...state.currentBoard,
                    lists: [
                        ...state.currentBoard.lists,
                        action.payload
                    ]
                }
            }
        }
        case boardConstants.UPDATE_CURRENT_BOARD_ID: {
            return {
                ...state,
                boardID: action.payload
            }
        }
        default:
            return state;
    }
}

export default boardReducer;