import React from 'react';
import TodoList from './TodoList.js';
import Form from './Form.js';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: [
        {task: 'Add Todo Items', id: 1234123, completed: false},
      ]
    }
  };

  addTask = (task) => {
    const newTodo = {task: task, id: Date.now(), completed: false};
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  
  removeTasks = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (!todo.completed);
      })
    });
  }

  toggleDone = (id) => {
    this.setState({...this.state, todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })});
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList toggleDone={this.toggleDone} todos={todos} />
        <Form addTask={this.addTask} removeTasks={this.removeTasks}/>
      </div>
    )
  };
}