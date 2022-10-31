const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TokenSchema = new Schema({
    user:           { type: String, require: true  },
    refreshToken:   { type: String,  require: true }
})

module.exports = mongoose.model('mindbox-token', TokenSchema)