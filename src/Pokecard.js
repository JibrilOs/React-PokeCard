import React, { Component } from "react";
import "./Pokecard.css";
const Poke_Api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgSrc = `${Poke_Api}${id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-tile">{name}</h1>
        <img src={imgSrc} alt="cat" />
        <div className="Pokecard-data">Type:{type}</div>
        <div className="Pokecard-data">base_experience:{base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
