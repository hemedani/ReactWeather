var React = require('react');

var WeatherForm = React.createClass({
  bezanHava: function (ev) {
    ev.preventDefault();

    var loc = this.refs.inp.value;

    if (loc.length > 0) {
      this.refs.inp.value = '';
      this.props.roSearch(loc);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.bezanHava}>
        <input type='text' ref='inp' />
        <button>Bigi AboHAVA</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
