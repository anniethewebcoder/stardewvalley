const mongoose = require('mongoose')

const GiftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name.']
    },
    type: {
        type: String
    },
    source: {
        type: Array
    },
    ingredients: {
        type: Array
    },
    recipe: {
        type: String
    },
    equipment: {
        type: String
    },
})

module.exports = mongoose.model('Gift', GiftSchema)