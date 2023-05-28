// Service Layer SHOULD:
//     Contain business logic
//     Leverage the data access layer to interact with the database
//     Be framework agnostic
// Service Layer SHOULD NOT:
//     Be provided the req or res objects
//     Handle responding to clients
//     Provide anything related to HTTP Transport layer; status codes, headers, etc.
//     Directly interact with the database
// Service can make calls to the data access layer

const userDAO = require('../dao/user');
const { findUserByEmail } = require('./util');

class UserService {
    async createUser(userDto) {
        const {name, email, password, phone, jobTitle} = userDto;
        let id = await userDAO.findUserByEmail(email);
        let isThisEmailExist = ( id === null ) ? false : true ;
        if ( name && email && password && !isThisEmailExist ) {
            let id = await userDAO.createUser(name, email, password, phone, jobTitle);
            return id;
        }else {
            let id = -1;
            return id
        }
    }
};

module.exports = new UserService();