const LocalStrategy = require('passport-local')
const bcrypt = require("bcryptjs");
const Manager = require("../db/models/Manager/Manager")
const Admin = require('../db/models/Admin/Admin')
const BHT = require('../db/models/BHT/BHT')

module.exports = function (passport) {

  passport.serializeUser((user, done) => {
    // console.log('SERIAL', user)
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // console.log('DES', id)
    Manager.findById(id)
      .then(doc => {
        // console.log('???', doc) 
        done(null, doc)
      })
      .catch(err => console.log(err))
  });

  passport.use("manager",
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      let reg = /[@]/g
      let find = reg.test(email)
      if (find == true) {
        Manager.findOne({ email })
          .then(user => {
            // console.log('USER-email', user)
            if (!user) {
              return done(null, { user: false, message: 'Email is not in database.' })
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return done(null, { user: false, message: 'Password is incorrect.' })
            }
            return done(null, user)
          })
          .catch(err => console.log(err))
      } else {
        Manager.findOne({ phoneNum: email })
          .then(user => {
            // console.log('USER-#', user)
            if (!user) {
              return done(null, { user: false, message: 'Phone number is not in database.' })
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return done(null, { user: false, message: 'Password is incorrect.' })
            }
            return done(null, user)
          })
          .catch(err => console.log(err))
      }

    })
  );

  passport.use('admin',
    new LocalStrategy({ usernameField: 'adminId' }, (adminId, password, done) => {
      console.log('>>>', typeof adminId)
      Admin.findOne({ adminId })
      .then(user => {
          if (!user) {
            return done(null, { user: false, message: 'The Admin is not in the database.' })
          }
          if (password !== user.password) {
            return done(null, { user: false, message: 'Password is incorrect.' })
          }
          return done(null, user)
        })
        .catch(err => console.log(err))
    })
  )

  passport.use('bht',
    new LocalStrategy({ usernameField : 'email'}, (email, password, done) => {
      let reg = /[@]/g
      let find = reg.test(email)
      if (find == true) {
        BHT.findOne({email})
          .then(user => {
            if (!user) {
              return done(null, {user : false, message : 'Email is not in database.'})
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return done(null, {user: false, message : 'Password is incorrect.'})
            }
            return done(null, user)
          })
          .catch(err => console.log(err))
      } else {
        BHT.findOne({phoneNum : email})
          .then(user => {
            if (!user) {
              return done(null, {user : false, message : 'Phone number is not in database.'})
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return done(null, {user: false, message : 'Password is incorrect.'})
            }
            return done(null, user)
          })
          .catch(err => console.log(err))
      }
    })
  )
}
