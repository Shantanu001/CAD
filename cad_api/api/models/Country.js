/**
 * Country.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   countryName: {
     type: 'string'
   },

   flagLink: {
    type: 'string'
  },

  menuOptionsId: {
    model: 'MenuOptions'
  },

  menuDataId: {
    model: 'MenuData'
  }

  },

  fetchUserDetails : async (data, callback) => {
    let countryDetails = await Country.find().populate('menuOptionsId').populate('menuDataId');
    if(countryDetails) {
      callback(null,{
        status : 200,
        data : countryDetails[0]
      })
    }
    else {
      callback(null,{
        status : 400,
        message : 'Something went wrong'
      })
    }
  }

};

