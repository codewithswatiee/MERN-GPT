const User = require("../models/User")
const bcrypt = require("bcrypt")
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


exports.signUp = async (req, res) => {
    try{
        // req body se email, pass etc..
        // validate
        // save

        const {name, email, password} = req.body;
 
        const user = await User.findOne({email: email});
        if(user){
            return res.status(401).json({
                success: false,
                message: "Email already exists"
            })
        }
        const newUser = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        })

        return res.json(201).json({
            message: "OK",
            success: true,
            id: newUser._id,
        })
    } catch(err){
        console.error(`Got ${err.message}`); 
        return res.status(500).json({
            success: false,
            message: "Error Occured while creating user"
        })
    }
}