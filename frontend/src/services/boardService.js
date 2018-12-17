import axios from 'axios'

export const boardService = {
    getByUserId,
    getBoardById,
    create
}

const baseURL = "http://localhost:4000/api/boards";

function create(board) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(board)
    };
    
    return axios.get(`${baseURL}/boards/`, requestOptions)
    .then(handleResponse)
    .then(data => {
        return data;
    })
}

function getByUserId() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', 
        },
    };

    return axios.get(`${baseURL}/byUserId/5c0e0dfdb4f820f14dffcb79`, requestOptions)
        .then(data => {
            return data;
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

function getBoardById(boardId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${baseURL}/boards?boardID=${boardId}`, requestOptions)
        .then(handleResponse)
        .then(data => {
            const board = data[0];
            return board;
        })
}

function handleResponse(response) {
    debugger
    return response.data().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}