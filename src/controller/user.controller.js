
const userModel = require("../models/user.model");

let userController = {};

userController.getUserData = async (req, res) => {
    try {
        let serchText = req.query.search;
        console.log("sddsds=>", serchText)
        // let query = { firstName: { $regex: `/${serchText}/` } }
        let userdata = await userModel.aggregate([
            {
                $match: { "firstName": serchText }
            }
            // {
            //     $redact : {"firstName": serchText }
            // }
        ]);
        res.status(200).send({ sucess: true, data: userdata });
    } catch (error) {
        res.status(500).send({ sucess: false, message: error });
    }
}

module.exports = userController;