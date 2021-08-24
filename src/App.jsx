import React from "react";
import List from "./List";

class App extends React.Component {
  constructor() {
    console.log(`'${App.name}' Constructor`);
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`'${App.name}' did mount`);
  }

  shouldComponentUpdate() {
    console.log(`'${App.name}' should Update`);
    return true;
  }

  componentDidUpdate() {
    console.log(`'${App.name}' did update`);
  }

  componentWillUnmount() {
    console.log(`'${App.name}' will unmount`);
  }

  render() {
    const center = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    };

    console.log(`'${App.name}' render`);
    return (
      <div style={center}>
        <List />
      </div>
    );
  }
}

export default App;
