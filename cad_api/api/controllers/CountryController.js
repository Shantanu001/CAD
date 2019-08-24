/**
 * CountryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  fetchUserDetails : (req, res) => {
    Country.fetchUserDetails(req.body , (err, result) => {
      if(err){
        res.serverError(err);
      }
      else {
        res.json(result);
      }
    })
  }
};

