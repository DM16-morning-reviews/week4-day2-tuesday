import React, { Component } from "react";

import axios from "axios";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    axios.get("/api/pets").then(res =>
      this.setState({
        pets: res.data
      })
    );
  }
  render() {
    console.log(this.state.pets);

    const { pets } = this.state;

    let allPets = pets.map(e => {
      return (
        <div key={e.id}>
          <h2>{e.name}</h2>
          <img src={e.img} alt="Pet" />
        </div>
      );
    });
    return <div>{allPets}</div>;
  }
}

export default DashBoard;
