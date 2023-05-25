const userDAO = require('../dao/user')

class UserService {
    createUser(userDto) {
        const {name, email, password, phone, jobTitle} = userDto;
        return userDAO.createUser(name, email, password, phone, jobTitle);
    }
};

module.exports = new UserService();