const UserService = require('../services/user');

class UserControler {
    async createUser(req, res){
        try{
            const id = await UserService.createUser(req.body);
            res.status(201).json(id);
        } catch (err){
            console.error(err);
            res.status(500).json('Something went wrong')
        }
    };
}

module.exports = new UserControler();