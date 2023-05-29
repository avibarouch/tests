// Put business logic hear
const fetch = require("node-fetch");
const userDAO = require('../dao/user')

//exports.feedback = (name, email, password, phone, jobTitle) => {
//    return 'Name is ' + name 
//        + ', Email is ' + email 
//        + ', Password is ' + password
//        + ', Phone is ' + phone
//        + ', Job Title is ' + jobTitle;
//};

exports.register = async (name, email, password, phone, jobTitle) => {
    var jsonData = null ; 
    try{
        const response = await fetch("http://localhost:8080/user", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                jobTitle: jobTitle
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        });
        jsonData = await response.json();
    } catch (err) {
        // Todo: something. Call a frontend function probebly
        console.log(`Util register Error ${err}`);
    }
    return jsonData
}

exports.login = async (email, password) =>{
    try{
        const isAproved = await userDAO.approve(email, password);
    } catch(err) {
        console.log(`Util aprove Error ${err}`);
    } finally {
        if (typeof isAproved === "undefined") {
            // Todo: something. Call a frontend function probebly
            console.log ('wrong email or password or both');
            return 'wrong email or password';
        } else if  (isAproved == null) {
            // Todo: something. Call a frontend function probebly
            console.log('wrong password');
            return 'wrong password';
        } else {
            // Todo: something. Call a frontend function probebly
            console.log ('Login successfully');
            return 'Login successfully';
        }
    }
}