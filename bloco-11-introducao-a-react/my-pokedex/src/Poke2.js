import react from "react";
import PropTypes from 'prop-types';

class Poke2 extends react.Component {
  render() {
    const {
      pok: { name, type, averageWeight, image },
    } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:{averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
        <img src={image} alt="pokemon"></img>
      </div>
    );
  }
}

Poke2.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Poke2;
