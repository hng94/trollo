import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";
import ListHeader from "./ListHeader";
import Cards from "./Cards";
import CardAdder from "./CardAdder";
import "./List.scss";

class List extends Component {
  // static propTypes = {
  //   boardId: PropTypes.string.isRequired,
  //   index: PropTypes.number.isRequired,
  //   list: PropTypes.shape({ _id: PropTypes.string.isRequired }).isRequired
  // };

  render = () => {
    const { list, boardId, index } = this.props;
    return (
      <Draggable
        draggableId={list.listID}
        index={index}
        disableInteractiveElementBlocking
      >
        {(provided, snapshot) => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              className="list-wrapper"
            >
              <div
                className={classnames("list", {
                  "list--drag": snapshot.isDragging
                })}
              >
                <ListHeader
                  dragHandleProps={provided.dragHandleProps}
                  listTitle={list.titel}
                  listId={list.listID}
                  cards={list.cards}
                  boardId={boardId}
                />
                <div className="cards-wrapper">
                  <Cards cards={list.cards} listId={list.listID}/>
                </div>
              </div>
              <CardAdder listId={list.listID} />
            </div>
            {provided.placeholder}
          </>
        )}
      </Draggable>
    );
  };
}

export default connect()(List);
