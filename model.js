const mongoose = require('mongoose')

const VillagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name.']
    },
    town: {
        type: String
    },
    address: {
        type: String
    },
    season: {
        type: String
    },
    day: {
        type: Number
    },
    family: {
        type: Array
    },
    portrait: {
        type: String
    },
    status: {
        type: String
    },
    favorites: {
        type: Array
    },
})

module.exports = mongoose.model('Villager', VillagerSchema)