import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    };
  }

  handleChange = event => {
    //Hanna - this function changes the UI state when something is typed
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };

  //Hanna - this function updates the display when the button is pressed, adds one to counter
  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      name: this.state.name,
      count: this.props.count + 1
    });
  };

  render() {
    return (
      <Form
        name={this.state.name}
        count={this.state.count}
        handleChange={this.state.handleChange}
      />
    );
  }
}

export default App;
