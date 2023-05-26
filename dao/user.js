// The Data Access Layer (DAL) is where the code integrates with an external source of truth like a database.
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
       return id;
    }
}

module.exports = new UserDAO();