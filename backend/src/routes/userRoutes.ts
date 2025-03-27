import express, {Router} from 'express';
import { getAllUsers } from './userController/userController';

const userRouter: Router = express.Router();

userRouter.get("/", getAllUsers);

export default userRouter;