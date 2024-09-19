const mongoose = require('mongoose');

const todontSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    done:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todont', todontSchema);