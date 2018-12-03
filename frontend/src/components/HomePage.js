import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import BoardCreator from "./BoardCreator";
import "./HomePage.scss";
import { boardActions } from "../actions";

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
    const { boards, listsById } = this.props;
    return (
      <>
        {/* <Header /> */}
        <div className="home">
          <div className="main-content">
            <h1>Boards</h1>
            <div className="boards">
              {boards.map(board => (
                <Link
                  key={board.boardID}
                  className="board-link"
                  to={`/b/${board.boardID}/`}
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
  boards: Object.values(state.boardReducer),
  listsById: state.listReducer
});

export default connect(mapStateToProps)(HomePage);
