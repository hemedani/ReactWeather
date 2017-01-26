var axios = require('axios');

const OWM = 'http://api.openweathermap.org/data/2.5/weather?appid=0c13f5dcfd7c7fd65dd6f341e49893be';

module.exports = {
  getTemp: function (loc) {
    var encLoc = encodeURIComponent(loc);
    var reqUrl = `${OWM}&q=${encLoc}`;

    return axios.get(reqUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.massage) {
        throw new Error(err.data.massage);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.data.massage);
    })
  }
}
