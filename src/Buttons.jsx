import React from "react";
import StyledButton from './StyledButton';

class Buttons extends React.Component {
  constructor() {
    console.log(`'${Buttons.name}' Constructor`);
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`'${Buttons.name}' did mount`);
  }

  shouldComponentUpdate() {
    console.log(`'${Buttons.name}' should Update`);
    return true;
  }

  componentDidUpdate() {
    console.log(`'${Buttons.name}' did update`);
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onResetClick = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(`'${Buttons.name}' render`);
    return (
      <div id={this.props.id} style={{ marginTop: 5 }}>
        <StyledButton onClick={this.onClick}>
          I have been clicked {this.state.count} times
        </StyledButton>
        <StyledButton onClick={this.onResetClick}>
          Reset
        </StyledButton>
        <StyledButton
          onClick={() => this.props.onRemoveClickHandler(this.props.id)}
        >
          Remove
        </StyledButton>
      </div>
    );
  }
}

export default Buttons;
