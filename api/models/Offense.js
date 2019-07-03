// Offense.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Offense = new Schema({
  offenderName: {
    type: String
  },
  license: {
    type: String
  },
  email: {
    type: String
  },
  policeid: {
    type: String
  },
  offense: {
      type: Array
  },
  vehicleno:{
      type: String
  },
  challanid: {
      type: String
  },
  transactionId:{
      type: String 
  }
},{
    collection: 'Offense'
});

module.exports = mongoose.model('Offense', Offense);
