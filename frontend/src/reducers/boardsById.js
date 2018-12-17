import { boardConstants } from "../actions/constants";

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const { boardId, listId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          lists: [...state[boardId].lists, listId]
        }
      };
    }
    case "MOVE_LIST": {
      const { oldListIndex, newListIndex, boardId } = action.payload;
      const newLists = Array.from(state[boardId].lists);
      const [removedList] = newLists.splice(oldListIndex, 1);
      newLists.splice(newListIndex, 0, removedList);
      return {
        ...state,
        [boardId]: { ...state[boardId], lists: newLists }
      };
    }
    case "DELETE_LIST": {
      const { listId: newListId, boardId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          lists: state[boardId].lists.filter(listId => listId !== newListId)
        }
      };
    }
    case boardConstants.GET_BOARDS_SUCCESS: {
      const {boards} = action.payload
      let newBoard = {...state}
      boards.forEach(item => {
        newBoard = {
          ...newBoard,
          _id: _id,
          title: title,
          lists: lists,
          users: users,
          color: "blue"
        }
      });
      return newBoard
    }
    case "ADD_BOARD": {
      const { boardTitle, boardId, userId, lists } = action.payload;
      console.log(state);
      return {
        ...state,
        [boardId]: {
          _id: _id,
          title: title,
          lists: lists,
          users: users,
          color: "blue"
        }
      };
    }
    case "CHANGE_BOARD_TITLE": {
      const { boardTitle, boardId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          titel: boardTitle
        }
      };
    }
    case "CHANGE_BOARD_COLOR": {
      const { boardId, color } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          color
        }
      };
    }
    case "DELETE_BOARD": {
      const { boardId } = action.payload;
      const { [boardId]: deletedBoard, ...restOfBoards } = state;
      return restOfBoards;
    }
    default:
      return state;
  }
};

export default boardsById;
