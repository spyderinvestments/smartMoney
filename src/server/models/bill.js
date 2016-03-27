'use strict';

// modules =================================================
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema ==================================================
let billSchema = new Schema({
    name: {
        type: String
    },
    due: {
        type: Date
    },
    split: {
        type: Array
    },
    amount: {
        type: String
    },
    paid: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        default: 'none'
    }
});
//method to update user with their share of the bill

module.exports = mongoose.model('Bill', billSchema);
