const mongoose = require('mongoose')


const shortUrlSchema = new mongoose.Schema({
  fullurl: {
    type: String,
    required: true
  },
  shorturl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)