export const boardService = {
    getBoards,
    createBoard
}

const baseURL = "http://localhost:4000";

function createBoard(board) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(board)
    };
    
    return fetch(`${baseURL}/boards/`, requestOptions)
    .then(handleResponse)
    .then(data => {
        debugger
        return data;
    })
}

function getBoards() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${baseURL}/boards`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        })
}

function getBoardById(boardId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${baseURL}/boards?id=${boardId}`, requestOptions)
        .then(handleResponse)
        .then(data => {
            const board = data[0];
            return board;
        })
}

function handleResponse(response) {
    return response.text().then(text => {
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