'use strict';

const jwt = require('jwt-simple'),
  moment = require('moment'),
  User = require('../models/user');

const config = {
  expTime: {
    num: 7,
    unit: 'days'
  },
  refreshToken: false,
  saltRounds: 10,
  validatePassword: function (password) {
    if (password) return (password.length > 6);
    return true;
  },
  validateUsername: function (username) {
    if (username) return (username.length > 3);
    return false;
  }
};


module.exports = function (req, res, next) {

  if (!req.headers.authorization) {
    return res.status(401).send('authorization required');
  }

  let token = req.headers.authorization.replace('Bearer ', '');

  try {
    var decoded = jwt.decode(token, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).send('authorization required');
  }

  if (decoded.exp < moment().unix()) {
    return res.status(401).send('authorization expired');
  }

  if (config.refreshToken) {
    User.findOneById(decoded.id, (err, user) => {
      if (err) return res.status(400).send('server error');
      if (!user) return res.status(401).send('authorization required');
      req.userId = decoded.id;
      res.body(token);
      next();
    });
  } else {
    req.userId = decoded.id;
    next();
  }
};
