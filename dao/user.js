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
    async findUserByEmail(email){
        const [user] = await db('users')
            .where('email', email);
        if (user) {
            var id = user.id;
            return id;
        } else return null;
    }

    async approve(email, password){
        const id = await this.findUserByEmail(email);
        if (id){
            const [user] = await db('users')
                .where('id', id);
            if (user) {
                if (user.password === password) {
                    return  id;
                } else {
                    return null;
                }
            }
        }
    }

    //async approve(email, password){
    //    const [user] = await db('users').where({
    //        'email': email,
    //    })
    //}
}

module.exports = new UserDAO();