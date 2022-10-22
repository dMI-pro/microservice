import jwt from "jsonwebtoken";
import Fakerator from "fakerator";
import Joi from "joi";
import {customerLoggerInfo, customerLoggerError} from "../utils/logger.js";
import User from "../../views/models/userSchema.js";

const {JWT_SECRET_KEY, ID_USER} = process.env;
const fakerator = Fakerator();
const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.{8,30})(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%^&*=+]).*$'))
        .required()
});

class AuthController {
    async login(req, res) {
        try {
            const result = schema.validate(req.body);
            if (result.error) {
                res.status(400).send(result.error.toString()).end();
                return;
            }
            const name = fakerator.names.name();
            const email = fakerator.internet.email();
            const token = jwt.sign({id:ID_USER}, JWT_SECRET_KEY, {expiresIn: "24h"});
            res.status(200).json({
                token,
                user: {
                    id: ID_USER,
                    username: req.body.username,
                    name: name,
                    email: email,
                }
            });
            customerLoggerInfo.log('info', `auth/login - ${req.body.username}`);
        } catch (e) {
            res.status(500).json(e.message);
            customerLoggerError.log('error', `message:${e.message}; func:auth/login; code status:500;`);
        }
    }
    async validate(req, res) {
        try {
            const email = fakerator.internet.email();
            res.status(200).json(`validate работает -> ${email}`);
            customerLoggerInfo.log('info', `auth/validate - ${email}`);
        } catch (e) {
            res.status(500).json(e.message);
            customerLoggerError.log('error', `message:${e.message}; func:auth/validate; code status:500;`);

        }
    }
    async create(req, res) {
        try {
            const {firstName, lastName, username, password} = req.body
            const user = await User.create({firstName, lastName, username, password})
            res.status(200).json(`user created -> ${user._id}`);
            customerLoggerInfo.log('info', `auth/validate - ${user.first_name}`);
        } catch (e) {
            res.status(500).json(e.message);
            customerLoggerError.log('error', `message:${e.message}; func:auth/validate; code status:500;`);
        }
    }
}

export default new AuthController();
