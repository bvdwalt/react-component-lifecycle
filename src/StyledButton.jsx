import React from "react";
import styled from "styled-components";

class StyledButton extends React.Component {
  render() {
    const StyledButton = styled.button`
      background-color: black;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 5px;
      margin: 10px 0px;
      cursor: pointer;
    `;

    return <StyledButton variant={this.props.variant} onClick={this.props.onClick}>{this.props.children}</StyledButton>;
  }
}

export default StyledButton;