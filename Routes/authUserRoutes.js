import express from 'express';

import {protect} from '../Middleware/protect.js';
import { isadmin } from '../Middleware/admin.js';
import { authSignUp, authLogin } from '../Controller/authUserController.js';

const authUserRoute = express.Router();

authUserRoute.post('/authsignup', authSignUp);
authUserRoute.post('/authlogin', authLogin);

authUserRoute.get("/profile",protect, (req,res) => {
     res.json({
        message:"protected profile",
        user : req.role
    })
})
authUserRoute.get("/adminprofile", protect, isadmin, (req,res) => {
        res.json({
           message:"protected admin profile",
           user : req.role
       })
   })

export default authUserRoute;