const Token = require('../models/token')

async function destroy(req, res) {
    try {
        const token = req.params.token;
        const tokenToRemove = await Token.getOneByToken(token);
        const result = await tokenToRemove.destroy();
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = { 
    destroy
}
