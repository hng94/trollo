import { listConstants } from './constants';
import { listService} from '../services/listService';
import { alertActions } from './alertActions';

export const listActions = {
    getListById,
    addList,
    createList
}

function gettingList() { 
    return { 
        type: listConstants.GETTING_LIST
    } 
}


// function getBoards() {
//     return dispatch => {
//         dispatch(gettingBoard());
//         boardService.getBoards()
//             .then(
//                 boards => {
//                     boards.forEach(board => {
//                         dispatch(addBoard(board));
//                     });
//                 },
//                 error => {
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             )
//     }
// }

function getListById(listId) {
    return dispatch => {
        dispatch(gettingList());
        listService.getListById(listId)
            .then(
                list => {
                    debugger
                    // dispatch(addBoardToState(board));
                    dispatch(addList(list));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
}

function createList(list) {
    return dispatch => {
        listService.createList(list)
            .then(
                board => {
                    dispatch(addList(list));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
}

function addList(list) { 
    return { 
        type: listConstants.ADD_LIST, 
        payload: list 
    }
}