import React, { Component } from "react";
import "./Pokecard.css";
const Poke_Api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
 let padTo = (number) => 
 number <= 999 ? `00${number}`.slice(-3) : number;
;
class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgSrc = `${Poke_Api}${padTo(id)}.png`;
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
