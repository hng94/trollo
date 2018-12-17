import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import slugify from "slugify";
import classnames from "classnames";
import Header from "../Header/Header";
import BoardAdder from "./BoardAdder";
import "./Home.scss";
import { boardActions } from "../../actions/boardActions";

class Home extends Component {
  // static propTypes = {
  //   boards: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       _id: PropTypes.string.isRequired,
  //       color: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired
  //     }).isRequired
  //   ).isRequired,
  //   listsById: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(boardActions.getByUserId());
  }

  render = () => {
    const { boards, listsById, history } = this.props;
    return (
      <>
        <Header />
        <div className="home">
          <div className="main-content">
            <h1>Boards</h1>
            <div className="boards">
              {boards.map(board => (
                <Link
                  key={board.boardID}
                  className={classnames("board-link", "blue")}
                  to={`/boards/${board.boardID}/`}
                >
                  <div className="board-link-title">{board.titel}</div>
                  <div className="mini-board">
                    {board.listOfListIDs.map(listId => (
                      <div
                        key={listId}
                        className="mini-list"
                        style={{
                          height: `${Math.min(
                            (listsById[listId].cards.length + 1) * 18,
                            100
                          )}%`
                        }}
                      />
                    ))}
                  </div>
                </Link>
              ))}
              <BoardAdder history={history} />
            </div>
          </div>
        </div>
      </>
    );
  };
}

const mapStateToProps = state => ({
  boards: Object.values(state.boardsById),
  listsById: state.listsById
});

export default connect(mapStateToProps)(Home);
