import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
          {this.props.todos.map(todo => {
            return <Todo todo={todo} toggleDone={this.props.toggleDone} key={todo.id} />
          })}
      </ul>
    )
  }
}
