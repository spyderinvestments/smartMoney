'use strict';

module.exports = {
  expTime: {num: 7, unit: 'days'},
  refreshToken: false,
  saltRounds: 10,
  validatePassword: function(password) {
    if (password) return (password.length >= 3);
    return true;
  },
  validateUsername: function(username) {
    if (username) return (username.length >= 3);
    return false;
  }
};
