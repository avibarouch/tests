// The Data Access Layer (DAL) is where the code integrates with an external source of truth like a database.
const db = require('../db/db');

class UserDAO {
    
    async createUser(name, email, password, phone, jobTitle){
        try {
            const [id] = await db('users').insert({
                name : name,
                email: email,
                password: password,
                phone: phone,
                job_title: jobTitle
            })
            return id;
        } catch(err){
            console.log(`UserDAO.createUser Error: ${err}`)
            return -1
        } finally {
        }

    }
    
    async findUserByEmail(email){
        try {
            const [user] = await db('users')
                .where('email', email);
            if (user) {
                var id = user.id;
                return id;
            } else return null;
        } catch(err){
            console.log(`UserDAO.findUser ${err}`)
            return null
        }
        finally {
        }
    }

    async approve(email, password){
        try{
            const id = await this.findUserByEmail(email);
            if (id){
                const [user] = await db('users')
                    .where('id', id);
                if (user) {
                    if (user.password === password) {
                        return  'Login successfully';
                    } else {
                        return 'Wrong password';
                    }
                }
                return 'something happend'
            } 
            return 'Email not exist';
        } catch(err) {
            return `UserDAO.Approve Error ${err}`
        } finally {
        }
    }

}

module.exports = new UserDAO();