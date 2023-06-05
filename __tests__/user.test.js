const express = require('express');
const db = require('../db/db');
const server = require('../server')

const {register, login} = require('../services/util');

var timeOut=null;
const debugTimeOut = 100000000;
//Add This when debug: timeOut = debugTimeOut

const maxRand = 9999999;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const delay = 10000;

test('1. Is Server listen to port 8080', async()=>{
    await expect(server.httpServer.listening).toBe(true);
});

test('2. Is mysqld ready for connections on port: 3306', async()=>{
    let response = null;
    await db.select(['NonExistentColumn'])
        .from('NoneExistTable')
        .catch(function(error) {
            response = error;
        })
    let check = (response.message == 'connect ECONNREFUSED 127.0.0.1:3306');
    if (check) {
        console.log('Tests user 1. suggest: Try to start the proper docker containr');
    }
    expect(response.message).not.toContain('connect ECONNREFUSED 127.0.0.1:3306');
});

test('3. Created successfuly a user with all fields: name, email, password, phone and job title', async ()=>{
    let email = getRandomInt(maxRand) + 'dadi@gmail.com';
    let response = await register('David', email, 'shara123', '456123789', 'First Comander');
    expect(response).toBeGreaterThan(0);
});

test('4. Try To Create user without a name will fail', async ()=>{
    let email = getRandomInt(maxRand) + 'bibi@gmail.com';
    let response = await register(NaN , email, 'bibi123', '987645321', 'CEO');
    expect(response).toBe(-1);
});

test('5. Try To Create user without an Email', async ()=>{
    let response = await register('Hana' , '', 'hana123', '123456789', 'COS');
    expect(response).toBe(-1);
});

test('6. Try To Create user with Email that already exist in the database will fail', async ()=>{
    let response = await register('Dadi' , 'david@gmail.com', 'david2002', '123456789', 'First Comander');
    expect(response).toBe(-1);
});

test('7. Successfully login with exist email and match password', async ()=>{
    let response = await login('david@gmail.com', 'david123');
    expect(response).toBe('Login successfully');
},timeOut = debugTimeOut);

test('8. Try to login with wrong password', async ()=>{
    let response = await login('david@gmail.com', 'jhon');
    expect(response).toBe('Wrong password');
},timeOut = debugTimeOut);

test('9. Try to login with wrong email', async ()=>{
    let response = await login('davidtheKing@gmail.com', 'david123');
    expect(response).toBe('Email not exist');
},timeOut = debugTimeOut);

afterAll(()=>{
    try {
        db.destroy()
    } catch(err) {
        //console.log(`user.test Error on try to db.destroy ${err}`)
    }
    server.httpServer.close();
})
