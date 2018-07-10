import React, { Component } from "react";

class Pet extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      imgInput: "",
      editPet: false
    };
  }

  handleEdit = () => {
    this.setState({
      editPet: !this.state.editPet
    });
  };

  handleInput = (val, state) => {
    this.setState({
      [state]: val
    });
  };

  changePet = (id, name, img) => {
    this.props.changePet(id, name, img);
    this.handleEdit();
  };

  render() {
    const { editPet, nameInput, imgInput } = this.state;
    const { name, img, id } = this.props;
    return (
      <div>
        {!editPet ? (
          <h2>{name}</h2>
        ) : (
          <input
            type="text"
            placeholder="Insert New Pet Name"
            onChange={e => this.handleInput(e.target.value, "nameInput")}
          />
        )}
        {!editPet ? (
          <img src={img} alt="Pet" />
        ) : (
          <input
            type="text"
            placeholder="Insert New Pet Name"
            onChange={e => this.handleInput(e.target.value, "imgInput")}
          />
        )}
        {editPet ? (
          <button onClick={() => this.changePet(id, nameInput, imgInput)}>
            Submit
          </button>
        ) : (
          <button onClick={this.handleEdit}>Edit Pet</button>
        )}
      </div>
    );
  }
}

export default Pet;
