const express = require('express');
const fetch = require("node-fetch");
const { before } = require('node:test');
const app = express();

//beforeAll(serverListen);

//const {feedback} = require('../services/util');

test('Server is listen to port 8080', ()=>{
    expect('not listen').toBe('listen');
})

test('User can be created / register', ()=>{
    try{
        fetch("http://localhost:8080/user", {
            method: "POST",
            body: JSON.stringify({
                name: 'John',
                email: 'jhon@gmail.com',
                password: 'john',
                phone: '0985704523',
                jobTitle: 'Cheef'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        
        });
    } catch (err) {
        expect(`Error ${err}`).toBe('User can be created');
    }   

});


test('Register page is open in the browser', ()=>{
    expect('not open').toBe('open');
});

test('A user record was insert',async(done)=>{
//    app.post('/user', (req, res) =>{
        const userParams = {
            "name": "Avi",
            "email": "avibarouch@gmail.com",
            "password": "avi1962"
        }

        try {
            app.post('localhost:8080/user', userParams)
        } catch(err) {
            expect(`Error ${err}`).toBe('created');
        }
});

test('All fields: name, email, password, phone and job title are editable on registration page', ()=>{
    //, 'Avi1962', '0545313606', 'cheef'
    expect(feedback('Avi', 'avibarouch@gmail.com', 'avi1962'))
        .toBe('Name is Avi, Email is avibarouch@gmail.com, Password is avi1962');
});

test('Try to register without a name', ()=>{

});
test('Try to register without an Email', ()=>{

});
test('Try to register with Email that already exist in the database', ()=>{

});
test('', ()=>{

});
test('', ()=>{

});
test('', ()=>{

});
test('', ()=>{

});
test('', ()=>{

});
