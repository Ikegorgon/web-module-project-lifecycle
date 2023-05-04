import React from 'react';

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.toggleDone(this.props.todo.id);
  }

  render() {
    return (
      <li onClick={this.handleClick} className={this.props.todo.completed ? 'complete' : ''}>{this.props.todo.task}</li>
    )
  };
}
