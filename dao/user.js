const db = require('../db/db');

class UserDAO {
    async createUser(name, email, password, phone, jobTitle){
       const [id] = await db('users')
        .insert({
         name : name,
         email: email,
         password: password,
         phone: phone,
         job_title: jobTitle
        })
       .returning('id'); // is not supported by mysql and will not have any effect.
       return id;
    }
}

module.exports = new UserDAO();