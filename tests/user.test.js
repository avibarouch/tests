const express = require('express');
const app = express();

const {register} = require('../services/util');

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

test('Server is listen to port 8080', ()=>{
    expect('ToDo: implement').toBe('listning');
});

test('mysqld: ready for connections. port: 3306', ()=>{
    expect('ToDo: implement').toBe('rady');
});

test('Create a user with all fields: name, email, password, phone and job title', async ()=>{
    let email = getRandomInt(9999999) + 'dadi@gmail.com';
    let response = await register('David', email, 'shara123', '456123789', 'First Comander');
    expect(response).toBeGreaterThan(0);
});

test('Create user without a name will fail', async ()=>{
    let email = getRandomInt(9999999) + 'bibi@gmail.com';
    let response = await register(NaN , email, 'bibi123', '987645321', 'CEO');
    expect(response).toBe(-1);
});

test('Create user without an Email', async ()=>{
    let response = await register('Hana' , '', 'hana123', '123456789', 'COS');
    expect(response).toBe(-1);
});
test('Try To Create user with Email that already exist in the database will fail', async ()=>{
    let email = getRandomInt(9999999) + 'dadi@gmail.com';
    let response = await register('Dadi' , email, 'david2002', '123456789', 'First Comander');
    expect(response).toBe(-1);
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
