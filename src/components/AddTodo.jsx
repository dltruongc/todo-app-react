import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <input
          className="input-text"
          type="text"
          name="title"
          id="title"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input className="input-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddTodo;
