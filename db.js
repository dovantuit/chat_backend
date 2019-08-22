const sequelize = require('sequelize')

const db = new sequelize({
    database: 'UnitChat',
    username: 'postgres',
    password: '1',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    define: { // not add 's' to model name
        freezeTableName: true
    }

})

db.authenticate()
    .then(() => console.log('ket noi thanh cong'))
    .catch(err => console.log(err.message))



const user = db.define('user', { // model : table in database
    username: sequelize.STRING,
    password: sequelize.STRING,
})



db.sync()

// update database 

// user.create({
//     username:'tom',
//     password:'1',
// }).then(user=>console.log(user.get({plain: true})))

// tao nhieu
// user.bulkCreate([
//     {username:"sdsf",password:"123"},
//     {username:"tsasadfdfin",password:"123"}
   
// ]).then(arr_user=>arr_user.forEach(user =>console.log(user.get({plain: true}))))


// xoa

// user.destroy({
//     where:{
//         id:4
//     }
// })
// .then(row =>console.log(row))

// update

// user.update({
//     password:"1111"
// },{
//     where:{id: 1}
// })
// .then(row =>console.log(row))


// user.findOne({raw: true})
// .then(user=>console.log(user))


// user.findAll({raw: true})
// .then(arr_user=>arr_user.forEach(user=>console.log(user)))

user.findById(5,{raw: true})
.then(user=>console.log(user))


