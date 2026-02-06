import { createUserController, getAllUserController, updateUserPasswordController , deleteUserController} from '../Controller/userController.js';
import express from 'express'

const userRoute = express.Router();

userRoute.post('/signup', createUserController);
userRoute.get('/getusers', getAllUserController);
userRoute.put('/updatepassword/:id', updateUserPasswordController);
userRoute.delete('/deleteuser/:id', deleteUserController);

export default userRoute