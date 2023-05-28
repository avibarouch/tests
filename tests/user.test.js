const express = require('express');
const app = express();

const {register} = require('../services/util');

var timeOut=null;
const debugTimeOut = 100000000;
//Add This when debug: timeOut = debugTimeOut

const maxRand = 9999999;
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

test('Server is listen to port 8080', ()=>{
    expect('listning').toBe('ToDo: implement');
});

test('mysqld: ready for connections. port: 3306', ()=>{
    expect('ready').toBe('ToDo: implement');
});

test('Created successfuly a user with all fields: name, email, password, phone and job title', async ()=>{
    let email = getRandomInt(maxRand) + 'dadi@gmail.com';
    let response = await register('David', email, 'shara123', '456123789', 'First Comander');
    expect(response).toBeGreaterThan(0);
}, timeOut = debugTimeOut);

test('Try To Create user without a name will fail', async ()=>{
    let email = getRandomInt(maxRand) + 'bibi@gmail.com';
    let response = await register(NaN , email, 'bibi123', '987645321', 'CEO');
    expect(response).toBe(-1);
});

test('Try To Create user without an Email', async ()=>{
    let response = await register('Hana' , '', 'hana123', '123456789', 'COS');
    expect(response).toBe(-1);
});
test('Try To Create user with Email that already exist in the database will fail', async ()=>{
    let response = await register('Dadi' , 'david@gmail.com', 'david2002', '123456789', 'First Comander');
    expect(response).toBe(-1);
});

//test('', ()=>{
//
//});
//test('', ()=>{
//
//});
//test('', ()=>{
//
//});
//test('', ()=>{
//
//});
//test('', ()=>{
//
//});
//