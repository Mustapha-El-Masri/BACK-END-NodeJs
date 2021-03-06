const express = require("express");
const app = express();
const errorHandler = require('./middleware/error')
const fileupload = require('express-fileupload')
const dotenv = require("dotenv");
const db = require("./config/db");
const path =require('path')
const cookieParser = require ('cookie-parser')
// const morgan = require("morgan")
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser())
const cors = require("cors")
app.use(cors("corsOptions"))
 
var corsOptions= {
    origin:"http://localhost:3000",
    optionsSuccessStatus:200
}
//File uploading
// app.use(morgan("tiny"))
app.use(express.static(path.join(__dirname, 'public')))

const contractrouter = require('./routers/Contract_router')
app.use('/contracts' , contractrouter)

/* const userrouter = require('./routers/User_router')
app.use('/users' , userrouter)
app.use(errorHandler); */

const sheetrouter = require('./routers/PresenceSheet_router')
app.use('/sheets' ,sheetrouter )

const directorrouter = require('./routers/Director_router')
app.use('/directors' ,directorrouter)

const holidayrouter = require('./routers/Holiday_router')
app.use('/holidays' ,holidayrouter)



const prrouter = require('./routers/PresenceSheet_router')
app.use('/pres' ,prrouter)

const employeerouter = require('./routers/Employee_router')
app.use('/employees' ,employeerouter)

const annualHolidayrouter = require('./routers/AnnualHoliday_router')
app.use('/annualHolidays' ,annualHolidayrouter)

const ExceptionalHolidayrouter = require('./routers/ExceptionalHoliday_router')
app.use('/exceptionalHolidays' ,ExceptionalHolidayrouter)

const FileRequestrouter = require('./routers/FileRequest_router')
app.use('/filerequests' ,FileRequestrouter)


const authrouter = require('./routers/Auth_router')
app.use('/auth' , authrouter)

const usersrouter = require('./routers/User_router')
app.use('/users' , usersrouter)

const sectionrouter = require('./routers/Section_router')
app.use('/sections' , sectionrouter)

const taskrouter = require('./routers/Task_router')
app.use('/tasks' , taskrouter)
 

app.get("/getImage/:img", (req,res)=>{
    res.sendFile(__dirname + "/storages/" + req.params.img)
})
 

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`)
})