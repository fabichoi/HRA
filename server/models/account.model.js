const { generateToken } = require('../lib/token');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

function hash(password) {
    return crypto.createHmac('sha512', process.env.SECRET_KEY).update(password).digest('hex');
}

const Account = new Schema({
    profile: {
        username: String     
    },
    email: {
        type: String
    },
    social: {
        facebook: {
            id: String,
            accessToken: String
        },
        google: {
            id: String,
            accessToken: String
        },
        naver: {
            id: String,
            accessToken: String
        },
        kakao: {
            id: String,
            accessToken: String
        }
    },
    password: String,
    loginCount: {
        type: Number,
        default: 0
    },
    signinDate: {
        type: Date,
        default: Date.now
    }
});

Account.statics.findByUsername = function(username) {
    return this.findOne({'profile.username': username}).exec();
}

Account.statics.findByEmail = function(email) {
    return this.findOne({email}).exec();
}

Account.statics.findByEmailOrUsername = function({username, email}) {
    return this.findOne({
        $or: [
            { 'profile.username': username },
            { email }
        ]
    }).exec();
};

Account.statics.localRegister = function({ username, email, password }) {
    const account = new this({
        profile: {
            username
        },
        email,
        password: hash(password)
    });
    return account.save();
};

Account.methods.validatePassword = function(password) {
    const hashed = hash(password);
    return this.password === hashed;
};

Account.methods.generateToken = function() {
    const payload = {
        _id: this.id,
        profile: this.profile
    };
    return generateToken(payload, 'account');
}

module.exports = mongoose.model('Account', Account);