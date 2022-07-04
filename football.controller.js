exports.create = async(req, res) => {

    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.football-data-api.com/league-players?key=test85g57&season_id=4759&first_name=Jordan',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(response.data.data.length);
})
.catch(function (error) {
  console.log(error);
});


}