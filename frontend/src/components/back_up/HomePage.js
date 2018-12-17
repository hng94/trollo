import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import BoardCreator from "./BoardCreator";
import Header from "./Header";
import "./HomePage.scss";
import { boardActions } from "../actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

class HomePage extends Component {
  // static propTypes = {
  //   boards: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired
  //     }).isRequired
  //   ).isRequired,
  //   listsById: PropTypes.object.isRequired,
  // };

  componentDidMount = () => {
    this.props.dispatch(boardActions.getBoards());
  }
  
  render = () => {
    const { boards, loading, error } = this.props;
    if(error){
      return(
        <h2>{error}</h2>
      )
    }
    if(loading || !boards){
      return(
        <h2>Loading...</h2>
      )
    }
    return (
      <>
        <Header/>
        <div className="board blue">
          <div className="main-content">
            <h1>Boards</h1>
            <div className="boards">
              {boards.map(board => (
                <Link
                  key={board.boardID}
                  className="board-link"
                  to={`/boards/${board.boardID}/`}
                >
                  <div className="board-link-title">{board.titel}</div>
                </Link>
                // <div key={board.id} className="board-link-title">{board.title}</div>
              ))}
              <BoardCreator/>
            </div>
          </div>
        </div>
      </>
    );
  };
}

const mapStateToProps = state => ({
  loading: state.boardReducer.loading,
  boards: state.boardReducer.boards,
  error: state.boardReducer.error
});

export default connect(mapStateToProps)(HomePage);
