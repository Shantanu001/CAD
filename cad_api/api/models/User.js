var Request = require("request");
var Util = require ("util");


module.exports = {

  fetchUserDetails : async () => {
   let requestPromise = Util.promisify(Request);
   let result = await requestPromise("https://api.ipdata.co/?api-key=test");
   console.log("1234",result.body);
     return (result.body);

  },

  fetchWeatherDetails: async(lat,long) =>{
    let requestPromise = Util.promisify(Request);
    let apiUrl = "https://api.darksky.net/forecast/0a6bf01b154df71937000b93787162f3/"+lat+","+long;
    let result = await requestPromise(apiUrl);
    console.log("1234",result.body  );
    return result.body;
  }

};

