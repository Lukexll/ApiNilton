const mongoose = require("mongoose");

const {Schema} = mongoose

const {serviceSchema} = require("./service");

const gameSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    services: {
        type: [serviceSchema],
    },
}, {timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;