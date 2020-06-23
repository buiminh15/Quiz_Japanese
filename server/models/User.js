const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String, unique: true, lowercase: true,
        trim: true
    },
    password: String,
    roles: {
        type: {
            type: String,
            enum: ['user', 'admin']
        },
        default: ['user']
    },
})

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password); // Return comparison of login password to password in database (true or false)
};

let User = mongoose.model('User', userSchema)

module.exports = User