import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import classnames from "classnames";
import "./Board.scss";
import { boardConstants } from "../actions/constants";
import { boardActions } from "../actions";

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

        };
    }
    
    componentDidMount = () => {
        const { boardId, dispatch } = this.props;
        dispatch({
            type: "UPDATE_CURRENT_BOARD_ID",
            payload: { boardId }
        });
    }

    onDragEnd = () => {

    }

    render = () => {
        const { lists, boardTitle, boardId } = this.props;
        return (
            <>
                <div className="list-wrapper"></div>
            </>
        )
    }
}