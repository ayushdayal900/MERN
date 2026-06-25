const jwt = require('jsonwebtoken')
const secret = 'secret@123.aiml123'

function serUser(user){
    return jwt.sign({
        _id: user.id,
        email: user.email
    }, secret)
}


function getUser(token){
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}
