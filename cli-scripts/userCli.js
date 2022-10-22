import {customerLoggerInfo, customerLoggerError} from "../src/utils/logger.js";
import userSchema from "../views/models/userSchema.js";

import dbConnect from "../src/utils/dbConnect.js";

dbConnect().then();

export async function getUserId(username, password, firstName = null, lastName = null) {
    try {
        await userSchema.findOne({
                username: username
            },
            (err, findUser) => {
                if (err) throw err;
                console.log(findUser);
                customerLoggerInfo.log('info', `script CLI getUserId - ${findUser._id}`);
                return findUser._id;
            }
        )
    } catch (e) {
        console.log(e);
        customerLoggerError.log('error', `message:${e.message}; func:script CLI create new User; code status:500;`);
        proccess.exit(1)
    }
}

export async function createUser(username, password, firstName = null, lastName = null) {
    try {
        await userSchema.create({
                username: username,
                password: password,
                first_name: firstName,
                last_name: lastName,
            },
            (err, newUser) => {
                if (err) throw err;
                console.log(newUser);
                console.log(`${username} successfully created`);
                customerLoggerInfo.log('info', `script CLI create new User - ${username}`);
                proccess.exit(0);
            }
        )
    } catch (e) {
        console.log(e);
        customerLoggerError.log('error', `message:${e.message}; func:script CLI create new User; code status:500;`);
        proccess.exit(1)
    }
}

export async function deleteUser(username) {
    try {
        await userSchema.findOneAndRemove({
                username: username
            },
            (err, deletedUser) => {
                if (err) throw err;
                console.log(`${deletedUser} successfully deleted`);
                customerLoggerInfo.log('info', `script CLI delete User - ${deletedUser}`);
                proccess.exit(0);
            }
        )
    } catch (e) {
        console.log(e);
        customerLoggerError.log('error', `message:${e.message}; func:script CLI delete new User; code status:500;`);
        proccess.exit(1)
    }
}

