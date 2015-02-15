'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HomeSchema = new Schema({
  name: String,
  postcode: String,
  roadName: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Home', HomeSchema);
