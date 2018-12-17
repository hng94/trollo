import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import classnames from "classnames";
import "./Board.scss";
import { boardConstants } from "../actions/constants";
import { boardActions } from "../actions";
import Header from "./Header";
import { boardService, listService } from "../services";
import ListAdder from "./ListAdder";
import List from "./List";
import BoardHeader from "./BoardHeader";

class Board extends Component {
    // static PropTypes = {
    //     lists: PropTypes.arrayOf(
    //         PropTypes.shape({id: PropTypes.string.isRequired})
    //     ).isRequired,
    //     boardId: PropTypes.string.isRequired,
    //     boardTitle: PropTypes.string.isRequired,
    //     dispatch: PropTypes.func.isRequired
    // }

    constructor(props) {
        super(props);
        this.state = {
            startX: null,
            startScrollX: null
        };
    }
    
    componentDidMount = () => {
        const {dispatch, boardId} = this.props;
        dispatch(boardActions.getBoardById(boardId));
    }

    handleDragEnd = ({ source, destination, type }) => {
    };
    
    handleMouseDown = ({ target, clientX }) => {
    };

    handleMouseMove = ({ clientX }) => {
    };

    handleMouseUp = () => {
    };
    
    handleWheel = ({ target, deltaY }) => {
    };

    render = () => {
        const { error, loading, currentBoard, boardId } = this.props;
        if(error) {
            return(
                <h2>{error}</h2>
            )
        }
        if(loading || !currentBoard){
            return(
                <h2>Loading ...</h2>
            )
        }
        currentBoard.lists = currentBoard.lists || [];
        return (
            <>
                <Header />
                <div className="board blue">
                    <BoardHeader/>
                    <div
                        className="lists-wrapper"
                        onMouseDown={this.handleMouseDown}
                        onWheel={this.handleWheel}
                    >
                        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
                        <DragDropContext onDragEnd={this.handleDragEnd}>
                            <Droppable
                                droppableId={currentBoard.boardID}
                                type="COLUMN"
                                direction="horizontal"
                            >
                                {provided => (
                                <div className="lists" ref={provided.innerRef}>
                                    {currentBoard.lists.map((list, index) => (
                                        <List
                                            list={list}
                                            boardId={boardId}
                                            index={index}
                                            key={list.listID}
                                        />
                                        // <p>{list.titel}</p>
                                    ))}
                                    {provided.placeholder}
                                    <ListAdder boardId={boardId} />
                                </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                    <div className="board-underlay" />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {boardId} = ownProps.match.params;
    return {
        boardId,
        currentBoard: state.boardReducer.currentBoard,
        loading: state.boardReducer.loading,
        error: state.boardReducer.error
    }
  };
  
  export default connect(mapStateToProps)(Board);