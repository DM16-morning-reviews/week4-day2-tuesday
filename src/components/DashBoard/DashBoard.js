import React, { Component } from "react";

import axios from "axios";

import Pet from "../Pet/Pet";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      newName: "",
      newImg: ""
    };
  }

  componentDidMount() {
    this.getPets();
  }

  getPets = () => {
    axios.get("/api/pets").then(res =>
      this.setState({
        pets: res.data
      })
    );
  };

  makePet = (name, img) => {
    axios.post("/api/pets", { name, img }).then(() => this.getPets());
  };

  changePet = (id, name, img) => {
    axios.put("/api/pets", { id, name, img }).then(() => this.getPets());
  };

  handleInput = (val, prop) => {
    this.setState({
      [prop]: val
    });
  };

  render() {
    // console.log(this.state);

    const { pets, newName, newImg } = this.state;

    let allPets = pets.map(e => {
      return (
        <Pet
          key={e.id}
          id={e.id}
          name={e.name}
          img={e.img}
          changePet={this.changePet}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Insert New Pet Name"
          onChange={e => this.handleInput(e.target.value, "newName")}
        />
        <input
          type="text"
          placeholder="Insert New Pet Url"
          onChange={e => this.handleInput(e.target.value, "newImg")}
        />
        <button onClick={() => this.makePet(newName, newImg)}>
          Make New Pet
        </button>
        {allPets}
      </div>
    );
  }
}

export default DashBoard;
