
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://ecomerceWeb:a%4089824249@cluster0.jtmfd0k.mongodb.net/ecc")
}

module.exports = connect;