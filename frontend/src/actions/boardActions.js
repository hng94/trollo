import { boardConstants } from './constants';
import { boardService } from '../services/boardService';
import { alertActions } from './alertActions';

export const boardActions = {
    getBoards,
    getBoardById,
    addBoard,
    createBoard
}

function gettingBoard() { 
    return { 
        type: boardConstants.GETTING_BOARD
    } 
}


function getBoards() {
    return dispatch => {
        dispatch(gettingBoard());
        debugger
        boardService.getBoards()
            .then(
                boards => {
                    boards.forEach(board => {
                        dispatch(addBoard(board));
                    });
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
}

function getBoardById(boardId) {
    return dispatch => {
        dispatch(gettingBoard());
        boardService.getBoard(boardId)
            .then(
                board => {
                    // dispatch(addBoardToState(board));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
}

function createBoard(board) {
    return dispatch => {
        boardService.createBoard(board)
            .then(
                board => {
                    dispatch(addBoard(board));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }
}

function addBoard(board) { 
    return { 
        type: boardConstants.ADD_BOARD, 
        payload: board 
    }
}