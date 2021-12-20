import React from 'react';
import { withStyles } from '@material-ui/core';
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const styles = {
  container: {
    border: '1px solid red',
    margin: 10,
  },
  taskList: {
    border: '1px solid blue',
    margin: 10,
    padding: 10,
  }
};

const TaskList = () => <div />;
const Container = () => <div />;

class Column extends React.Component {
  render() {
    const {classes, column, tasks} = this.props;

    return (
      <Container className={classes.container}>
        <div className={classes.title}>
          {column.title}
        </div>
        <Droppable droppableId={column.id}>
          {provided => (
            <TaskList
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              className={classes.taskList}
            >
              {tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Column);
