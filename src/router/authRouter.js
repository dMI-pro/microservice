import Router from 'express';
import AuthController from "../controller/authController.js";
import {loginLimited} from "../utils/rateLimit.js";

const authRouter = new Router();

authRouter.post('/login', loginLimited, AuthController.login);
authRouter.get('/validate', AuthController.validate);
authRouter.post('/create', AuthController.create);

export default authRouter;
