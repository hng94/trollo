import { boardConstants } from './constants';
import { boardService } from '../services/boardService';
import { listService } from '../services/listService';
import { listActions } from './listActions';
import { alertActions } from './alertActions';

export const boardActions = {
    getByUserId,
    getBoardById,
    createBoard
}

function getByUserId() {
    return dispatch => {
        dispatch({
            type: boardConstants.GET_BOARDS_REQUEST
        });
        boardService.getByUserId()
            .then(
                boards => {
                    debugger
                    boards.forEach(item => {
                        dispatch({
                            type: 'ADD_BOARD',
                            payload: item
                        })
                    });
                    dispatch({
                        type: boardConstants.GET_BOARDS_SUCCESS,
                    })
                })
            .catch(
                error => {
                    debugger
                    dispatch({
                        type: boardConstants.GET_BOARDS_FAILURE,
                        payload: error.toString()
                    });
                }
            )
    }
}

function getBoardById(boardId) {
    return dispatch => {
        dispatch({
            type: boardConstants.GET_BOARD_REQUEST
        });
        boardService.getBoardById(boardId)
            .then(
                board => {
                    dispatch({
                        type: boardConstants.GET_BOARD_SUCCESS,
                        payload: board
                    });
                },
                error => {
                    dispatch({
                        type: boardConstants.GET_BOARD_FAILURE,
                        payload: error.toString()
                    });
                }
            )
    }
}

function createBoard(board) {
    return dispatch => {
        dispatch({
            type: boardConstants.CREATE_BOARD_REQUEST
        })
        boardService.createBoard(board)
            .then(
                board => {
                    dispatch({
                        type: boardConstants.CREATE_BOARD_SUCCESS,
                        payload: board
                    });
                },
                error => {
                    dispatch({
                        type: boardConstants.CREATE_BOARD_FAILURE,
                        payload: error.toString()
                    });
                }
            )
    }
}
