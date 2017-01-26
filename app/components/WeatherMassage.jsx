var React = require('react');

var WeatherMassage = ({temp, loc}) => {
  return (
    <p>{loc} {temp} bishtar nist</p>
  );
}

module.exports = WeatherMassage;
