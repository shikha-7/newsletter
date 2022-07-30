const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Provide name"],
        min: 3
    },
    email: {
        type: String,
        requird: [true, "Please Provide email"],
        validate: {
            validator: validator.isEmail,
            message: `Please Provide valid email`
        },
        unique: true,
    },
    // password: {
    //     type: String,
    //     required: [true, "Please Provide password"]
    // }

});

module.exports = mongoose.model("register", UserSchema);