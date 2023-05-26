const express = require('express');
const app = express();

const {register} = require('../services/util');

test('Server is listen to port 8080', ()=>{
    expect('ToDo: implement').toBe('listning');
})

test('Create a user with all fields: name, email, password, phone and job title', async ()=>{
    let response = await register('David', 'david@gmail.com', 'shara123', '456123789', 'First Comander');
    expect(response).toBeGreaterThan(0);
});

test('Create user without a name will fail', async ()=>{
    let response = await register(NaN , 'bibi@gmail.com', 'bibi123', '987645321', 'CEO');
    expect(response).toBe(-1);
});

test('Create user without an Email', async ()=>{
    let response = await register('Hana' , '', 'hana123', '123456789', 'COS');
    expect(response).toBe(-1);
});
test('Create user with Email that already exist in the database will fail', async ()=>{
    let response = await register('Dadi' , 'david@gmail.com', 'david2002', '123456789', 'First Comander');
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
