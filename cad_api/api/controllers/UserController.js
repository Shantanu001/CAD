

module.exports = {

  fetchUserDetails: async (req,res)=>{
    let outputBody = {};

    let userInfo = await User.fetchUserDetails();
    userInfo = JSON.parse(userInfo);
    console.log("now",userInfo);
        outputBody.city = userInfo.city;
        outputBody.region = userInfo.region;
        let weatherResult = await  User.fetchWeatherDetails(userInfo.latitude,userInfo.latitude);
        outputBody.weatherResult = JSON.parse(weatherResult);
        res.json(outputBody);

    }


};

