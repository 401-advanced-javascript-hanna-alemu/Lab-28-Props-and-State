import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      count: this.props.count
    };
  }

  handleChange = event => {
    //Hanna - this function changes the UI state when something is typed
    //event.preventDefault();

    this.setState({
      name: event.target.value
    });
  };

  //Hanna - this function updates the display when the button is pressed, adds one to counter
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      name: this.state.name,
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Change {this.props.name} name</button>
        </form>

        <div>
          <div>Name:{this.state.name} </div>
          <div># of Updates: {this.state.count} </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
