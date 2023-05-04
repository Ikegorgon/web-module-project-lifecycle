import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: null
    }
  };

  handleChange = (e) => {
    this.setState({...this.state, task: e.target.value});
  }

  handleAddTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    document.getElementById("newTask").value = "";
  }

  handleRemoveTasks = (e) => {
    e.preventDefault();
    this.props.removeTasks();
  }

  render() {
    return (
      <form className="form">
        <input onChange={this.handleChange} type="text" id="newTask" name="newTask" placeholder="Enter New Tasks Here" />
        <button onClick={this.handleAddTask}>Add Task</button>
        <button onClick={this.handleRemoveTasks}>Remove Completed Tasks</button>
      </form>
    )
  };
}
