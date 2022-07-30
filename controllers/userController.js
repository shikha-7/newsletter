const UserSchema = require("../models/User");
const { StatusCodes } = require("http-status-codes");


const register = async (req, res) => {
    const { name, email } = req.body;
    const users = await UserSchema.findOne({ email });
    if (users) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: `EmailId Already Exist` })
    }
    const user = await UserSchema.create({ name, email });
    res.status(StatusCodes.CREATED).json({ user });
}

module.exports = { register }