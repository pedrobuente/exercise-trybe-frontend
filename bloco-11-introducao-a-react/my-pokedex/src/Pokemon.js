import react from "react";
import Poke2 from "./Poke2";

class Pokemon extends react.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((poke) => (
          <Poke2 pok={poke} key = {poke.id}/>
        ))}
      </div>
    );
  }
}

export default Pokemon;
