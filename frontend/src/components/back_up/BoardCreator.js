import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";
import ClickOutside from "./ClickOutside";
import { boardActions } from "../actions/boardActions";

class BoardAdder extends Component {
  // static propTypes = {
  //   userId: PropTypes.string.isRequired,
  //   dispatch: PropTypes.func.isRequired
  // };

  constructor() {
    super();
    this.state = { isOpen: false, boardTitle: "" };
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = event => {
    this.setState({ boardTitle: event.target.value });
  };

  handleSubmit = event => {
    // Dispatch action to put new empty board in redux store and db + push new url to history
    event.preventDefault();
    const { boardTitle } = this.state;
    if (boardTitle === "") {
      return;
    }
    const { dispatch, userId } = this.props;
    const boardId = shortid.generate();
    const newBoard = {
      titel: boardTitle,
      boardID: boardId,
      owner: userId,
      listOfListIDs: [],
      lists: []
    };
    dispatch(boardActions.createBoard(newBoard));
    this.setState({ isOpen: false, boardTitle: "" });
  };

//   handleKeyDown = event => {
//     if (event.keyCode === 27) {
//       this.setState({ isOpen: false });
//     }
//   };

  render = () => {
    const { isOpen, boardTitle } = this.state;
    return isOpen ? (
      <ClickOutside handleClickOutside={this.toggleOpen}>
        <form onSubmit={this.handleSubmit} className="board-adder">
          <input
            autoFocus
            className="submit-board-input"
            type="text"
            value={boardTitle}
            // onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            // spellCheck={false}
          />
          <input
            type="submit"
            value="Create"
            className="submit-board-button"
            disabled={boardTitle === ""}
          />
        </form>
      </ClickOutside>
    ) : (
      <button onClick={this.toggleOpen} className="add-board-button">
        Add a new board...
      </button>
    );
  };
}

const mapStateToProps = state => ({
  userId: state.user ? state.user.id : "guest"
});

export default connect(mapStateToProps)(BoardAdder);
