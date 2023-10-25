const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const assert = chai.assert
chai.use(chaiHttp)

let admin = {
    firstName: 'Admin',
    lastName: 'Admin',
    employeeId: 'AA123456',
    phoneNum: '000-000-0000',
    email: 'admin',
    password1: 'password',
    password2: 'password'
}

let testMGR1 = {
    firstName: 'Test',
    lastName: 'Manager',
    employeeId: '123456TT',
    phoneNum: '555-555-5555',
    email: 'test@test.com',
    password1: '1234',
    password2: '5678'
}
let testMGR2 = {
    firstName: 'Test2',
    lastName: 'Manager',
    employeeId: '987654TT',
    phoneNum: '999-999-9999',
    email: 'test2@test2.com',
    password1: '1234',
    password2: '1234'
}

let testMGR3 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'Test',
    lastName: 'Manager',
    employeeId: '123456TT',
    phoneNum: '555-555-5555',
    email: 'test@test.com',
    password1: '5678',
    password2: '5678'
}

let testMGR4 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'Test',
    lastName: 'Manager',
    employeeId: '123456TT',
    phoneNum: '999-999-9999',
    email: 'test@test.com',
    password1: '1234',
    password2: '1234'
}

let testMGR5 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'Test',
    lastName: 'Manager',
    employeeId: '123456TT',
    phoneNum: '111-111-1111',
    email: 'test2@test2.com',
    password1: '1234',
    password2: '1234'
}

let testMGR6 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'New-Test',
    lastName: 'New-Manager',
    employeeId: '123456TT',
    phoneNum: '111-111-1111',
    email: 'test@test.com',
    password1: '1234',
    password2: '1234'
}

let testMGR7 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'New-Test',
    lastName: 'New-Manager',
    employeeId: '123456TT',
    phoneNum: '222-222-2222',
    email: 'test@test.com',
    password1: '1234',
    password2: '1234'
}

let testMGR8 = {
    _id: '643420742ab481dd5a8a02dd',
    firstName: 'New-Test',
    lastName: 'New-Manager',
    employeeId: '123456TT',
    phoneNum: '111-111-1111',
    email: 'test10@test10.com',
    password1: '1234',
    password2: '1234'
}

let testLogin = {
    email: 'test@test.com',
    password: '5678'
}
let testLogin1 = {
    email: 'badTest@test.com',
    password: '1234'
}
let testLogin2 = {
    email: 'test@test.com',
    password: '1234'
}

suite('Registering a Manager', () => {
    // test('SHOULD not complete register - passwords do not match', (done) => {
    //     chai.request(app)
    //         .post('/auth/register/manager')
    //         .send(testMGR1)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.equal(res.body.message, 'Passwords do not match.')
    //             done()
    //         })
    // })
    test('SHOULD complete register', (done) => {
        chai.request(app)
        .post('/auth/register/manager')
        .send(testMGR2)
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.exists(res.body.message)
            assert.equal(res.body.message, 'Manager logged in.')
            done()
        })
    })
    // test('SHOULD not complete register - Manager already registered', (done) => {
    //    chai.request(app)
    //     .post('/auth/register/manager')
    //     .send(testMGR2)
    //     .end((err, res) => {
    //         assert.equal(res.status, 200)
    //         assert.exists(res.body.message)
    //         assert.equal(res.body.message, 'test@test.com is already in the database.')
    //         done()
    //     })
    // })
})

suite('Manager logging in', () => {
    // test('SHOULD not complete login - invalid password', (done) => {
    //     chai.request(app)
    //         .post('/auth/login/manager')
    //         .send(testLogin)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.equal(res.body.user, false)
    //             assert.equal(res.body.message, 'Password is incorrect.')
    //             done()
    //         })
    // })
    // test('SHOULD not complete login - invalid email', (done) => {
    //     chai.request(app)
    //         .post('/auth/login/manager')
    //         .send(testLogin1)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.equal(res.body.user, false)
    //             assert.equal(res.body.message, 'Email is not in database.')
    //             done()
    //         })
    // })
    // test('SHOULD complete login', (done) => {
    //     chai.request(app)
    //         .post('/auth/login/manager')
    //         .send(testLogin2)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.equal(res.body.message, 'Successful login')
    //             done()
    //         })
    // })
})

suite('Update Manager profile', () => {
    // test('SHOULD not complete update - passwords dont match', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR1)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.equal(res.body.message, 'Password do not match.')
    //             done()
    //         })
    // })
    // test('SHOULD not be able to update phone number - number already in database', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR4)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.message, '999-999-9999 is already registered. Please use another phone number.')
    //             done()
    //         })
    // })
    // test('SHOULD not be able to update email - email already in database', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR5)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.message, 'test2@test2.com is already registered. Please use another email.')
    //             done()
    //         })
    // })
    // test('SHOULD be able to update first and last name', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR6)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.errors, false)
    //             assert.equal(res.body.message, 'Successfully logged in.')
    //             assert.nestedInclude(res.body.user, {firstName : 'New-Test'})
    //             assert.nestedInclude(res.body.user, {lastName : 'New-Manager'})
    //             done()
    //         })
    // })
    // test('SHOULD be able to update phone number', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR7)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.errors, false)
    //             assert.nestedInclude(res.body.user, {phoneNum : '222-222-2222'})
    //             assert.equal(res.body.message, 'Your phone number has changed from 555-555-5555 to 222-222-222')
    //             done()
    //         })
    // })
    // test('SHOULD be able to update email', (done) => {
    //     chai.request(app)
    //         .post('/auth/update/manager')
    //         .send(testMGR8)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200)
    //             console.log('RES', res.body)
    //             done()
    //         })
    // })
})