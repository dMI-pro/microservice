import './_env/envLoad.js';
import {createUser, deleteUser} from './cli-scripts/userCli.js'

// current script name by start
const currentScript = process.argv[2].toLowerCase();
// method used create/delete
const method = process.argv[3].toLowerCase();
const username = process.argv[4];
const password = process.argv[5];
const firstName = process.argv[6];
const lastName = process.argv[7];

function checkMethod(method) {

    switch (method) {
        case "create":
            createUser(username, password, firstName, lastName).then();
            break;
        case "delete":
            deleteUser(username).then();
            break;
        default:
            console.log('Not the correct method. You can use create or delete');
            break;
    }
}


switch (currentScript) {
    case "user":
        checkMethod(method);
        break;
    default:
        console.log('Script name is incorrect (user)');
        break;
}
