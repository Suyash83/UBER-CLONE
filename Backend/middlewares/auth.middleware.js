const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');


// middleware to authenticate user by decoding jwt 
module.exports.authUser = async(req, res, next) => {

    // token taken either from cookie or from authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token: token});

    if(isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}