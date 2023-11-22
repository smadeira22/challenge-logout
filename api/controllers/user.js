const bcrypt = require('bcrypt');

const User = require('../models/user');
const Token = require('../models/token');

async function register (req, res) {
    try{ 
    const data = req.body;


    const salt = await bcrypt.genSalt(process.env.BCRYPT_SATL_ROUNDS)


    data.password = await bcrypt.hash(data.password, salt)

    console.log("data after hashing", data)

    const result = await User.create(data)

    res.status(201).send(result);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

};

async function login (req, res) {
    
    try {
        const data = req.body;
        /*look for user
          if user exists check password
            if password is correct authenticate
          if user does not exist
            tell them something
        */ 
    
        const user = await User.getOneByUsername(data.username)
        const authenticated = await bcrypt.compare(data.password, user.password)

        if(!authenticated){
        throw new Error("Incorrect credentials")
        } else {
            const token = await Token.create(user.id)
            res.status(200).send({ authenticated: true, token: token.token })
        }
    } catch(err) {
        res.status(401).json({ error: err.message })
    }
}

module.exports = {
    register, login
}                           