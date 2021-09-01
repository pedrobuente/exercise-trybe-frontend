import react from "react";
import "./App.css";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class App extends react.Component {
  render() {
    return (
      <main > 
        <Pokemon pokemons = {pokemons} />
      </main>
    );
  }
}

export default App;
