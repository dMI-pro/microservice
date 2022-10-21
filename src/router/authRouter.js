import Router from 'express';
import AuthController from "../controller/authController.js";
import {loginLimited} from "../utils/rateLimit.js";

const authRouter = new Router();

authRouter.post('/login', loginLimited, AuthController.login);
authRouter.get('/validate', AuthController.validate);

export default authRouter;
