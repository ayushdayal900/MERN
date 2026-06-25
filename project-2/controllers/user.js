const { v4: uuid } = require('uuid');


const {setUser, getUser} = require('../service/auth')

const User = require('../models/user')


async function handleUserSignUp(req, res){

    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });

    return res.render('home', {
        id: null
    })
    
}




async function handleLogin(req, res){

    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user.password == password){
        const sessionId = uuid();
        setUser(sessionId, user)
        res.cookie('uid', sessionId)
        return res.render('home', {
            id: null
        })
    }else{
        return res.end({
            error: 'Invalid username or password'
        })
    }


    
}

module.exports = {
    handleUserSignUp,
    handleLogin
}