import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            deleteTodo={this.props.deleteTodo}
            handleChange={this.props.handleChange}
            key={todo.id}
            todo={todo}
          ></TodoItem>
        ))}
      </div>
    );
  }
}

export default Todos;
