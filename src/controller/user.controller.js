
const userModel = require("../models/user.model");

let userController = {};

userController.getUserData = async (req, res) => {
    try {
        let serchText = req.query.search;
        console.log("sddsds=>", serchText)
        let query = new RegExp(`\\b${serchText}\\w*`, "i")
        let userdata = await userModel.find({firstName: query});
        res.status(200).send({ sucess: true, data: userdata });
    } catch (error) {
        res.status(500).send({ sucess: false, message: error });
    }
}

module.exports = userController;
