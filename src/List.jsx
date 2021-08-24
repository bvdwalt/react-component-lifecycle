import React from "react";
import Buttons from "./Buttons";
import StyledButton from "./StyledButton";

class List extends React.Component {
  constructor() {
    console.log(`'${List.name}' Constructor`);
    super();
    this.state = {
      children: [{ id: 1 }],
    };

    this.onRemoveClickHandler = this.onRemoveClick.bind(this);
  }

  componentDidMount() {
    console.log(`'${List.name}' did mount`);
  }

  shouldComponentUpdate() {
    console.log(`'${List.name}' should Update`);
    return true;
  }

  componentDidUpdate() {
    console.log(`'${List.name}' did update`);
  }

  componentWillUnmount() {
    console.log(`'${List.name}' will unmount`);
  }

  onAddNewClick = () => {
    let lastId = 0;
    if (this.state.children.length >= 1) {
      lastId = this.state.children[this.state.children.length - 1].id;
    }
    this.setState({
      children: this.state.children.concat({ id: lastId + 1 }),
    });
  };

  onRemoveClick = (id) => {
    var array = [...this.state.children];
    var index = array.findIndex(x => x.id === id);
    
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ children: array });
    }
  };

  render() {
    console.log(`'${List.name}' render`);
    return (
      <div>
        <StyledButton onClick={this.onAddNewClick} variant="primary">
          Add New
        </StyledButton>
        {this.state.children.map((item) => (
          <Buttons
            key={item.id}
            id={item.id}
            onRemoveClickHandler={this.onRemoveClickHandler}
          />
        ))}
      </div>
    );
  }
}

export default List;
