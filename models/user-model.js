const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    email:      { type: String, required: true, unique: true },
    password:   { type: String, required: true },
    role:       { type: String, required: true, default: 'user' },
    todos:      { type: Array,  default: [] }
})

const User = mongoose.model('mindbox-user', UserSchema)

module.exports = User