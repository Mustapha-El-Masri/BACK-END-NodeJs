const express = require("express")
const {protect} = require('../middleware/auth')

const route = express.Router()

const authcontroller = require("../controllers/Auth_controller")


route.post('/register' , authcontroller.register);
route.post('/login' , authcontroller.login);
route.get('/logout' , authcontroller.logout);
route.get('/me' ,protect, authcontroller.getMe);
route.put('/updatedetails' ,protect, authcontroller.updateDetails);
module.exports = route