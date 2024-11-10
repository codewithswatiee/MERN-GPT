const User = require("../models/User")

exports.getAllUsers = async( req, res) => {
    try{
        const users = await User.find({});
        if(!users){
            return res.status(401).json({
                success: false,
                message: "No users Found!"
            })
        }

        return res.status(200).json({
            success: true,
            data: users,
            message: "Users returned Successfully!"
        })
    } catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Error Occured while fetching users"
        })
    }
}