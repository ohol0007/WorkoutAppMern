const express = require('express')


//controller imports
const {signupUser , loginUser} = require('../controllers/userController')

const router = express.Router()


//Login in Route
router.post('/login', loginUser)


//Sign-up Route
router.post('/signup', signupUser)

module.exports = router