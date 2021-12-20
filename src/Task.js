import React from 'react';
import { withStyles } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";

const styles = {
  container: {
    border: '1px solid red',
    margin: 10,
  },
};

const Container = () => <div />;

class Task extends React.Component {
  render() {
    const {classes, task, index} = this.props;

    return (
      <Draggable draggableId={task.id} index={index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            className={classes.container}
          >
            {task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Task);
