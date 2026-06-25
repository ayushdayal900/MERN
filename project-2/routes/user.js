const express = require('express')
const {handleUserSignUp, handleLogin} = require('../controllers/user')
const router = express.Router();

router.post('/signup', handleUserSignUp)

router.get('/signup', (req, res) => {
    return res.render('signup')
})


router.get('/login', (req, res) => {
    return res.render('login')
})


router.post('/login', handleLogin);



module.exports = router;