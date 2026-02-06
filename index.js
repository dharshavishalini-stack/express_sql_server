import {connectDB} from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";
import authUserRoute from "./Routes/authUserRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())
//connectivity 
connectDB()

// http://localhost:5000/api/user/signup
// http://localhost:5000/api/user/getusers
// http://localhost:5000/api/user/updatepassword/:id

app.use('/api/users',userRoute)
app.use('/api/authusers',authUserRoute)
dotenv.config();

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})










//http://localhost:5000/api/authusers/authsignup
//http://localhost:5000/api/authusers/authlogin
//http://localhost:5000/api/authusers/profile
//http://localhost:5000/api/authusers/adminprofile