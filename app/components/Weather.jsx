var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMassage = require('./WeatherMassage');
var OwMapApi = require('../../api/opwth');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  begardSearch: function (loc) {
    var mn = this;

    debugger;
    this.setState({
      isLoading: true
    })
    OwMapApi.getTemp(loc).then(function (res) {
      mn.setState({
        loc: loc,
        temp: res,
        isLoading: false
      })
    }, function (err) {
      mn.setState({
        isLoading: false
      })
      alert(err);
    });
    // this.setState({
    //   loc: loc,
    //   temp: 52
    // })
  },
  render: function () {
    var {isLoading, temp, loc} = this.state;
    var mn = this;
    function renderMassage() {
      if (mn.state.isLoading) {
        return <h3>Darim Migirim DadehaRO ...</h3>;
      } else if (temp && loc) {
        return <WeatherMassage loc={loc} temp={temp}/>;
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm roSearch={this.begardSearch}/>
        {renderMassage()}
      </div>
    )
  }
});

module.exports = Weather;
