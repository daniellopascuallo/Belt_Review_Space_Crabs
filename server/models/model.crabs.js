const mongoose = require("mongoose");

const CrabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A Name is required"],
        minlength: [2, "Name must be at least 2 characters"],
    },
    spaceShip: {
        type: String,
        required: [true, "A Space Ship is required"],
        minlength: [2, "Space Ship must be at least 2 characters"]
    },
    weaponOne: {
        type: String,
        default: ""
    },
    weaponTwo: {
        type: String,
        default: ""
    },
    weaponThree: {
        type: String,
        default: ""
    }
}, { timestamps: true })

const Crab = mongoose.model("Crab", CrabSchema);
module.exports = Crab;