const mongose = require("mongoose");

const UserShema = new mongose.Schema({
    firstName: { type: String },
    LastName: { type: String },
    email: { type: String },
})


module.exports = mongose.model("user", UserShema);