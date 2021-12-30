const mongoose = require('mongoose');

const rtvagdSchema = new mongoose.Schema ({
    rtvagd: {type: String, required: true, maxlength: 30},
})

module.exports = mongoose.model('Rtvagd', rtvagdSchema);