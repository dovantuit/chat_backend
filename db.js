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



const roomlist = db.define('roomlist',{
    room_id: sequelize.STRING,
    room_name: sequelize.STRING,
    user_id: sequelize.STRING,


})

const messages = db.define('messages',{
    createdAt: sequelize.STRING,
    id: sequelize.STRING,
    is_read: sequelize.STRING,
    text: sequelize.STRING,
    user_id: sequelize.STRING
})



const user = db.define('user', { // model : table in database
    avatar: sequelize.STRING,
    emai: sequelize.STRING,
    name: sequelize.STRING,
    sub_id: sequelize.STRING,
    user_id: sequelize.STRING,
   
})



db.sync()



roomlist.create({
    room_id: '1234',
    room_name: 'zalo',
    user_id: '123',
}).then(user=>console.log(user.get({plain: true})))

// update database 

// user.create({
//     username:'tom',
//     password:'1',
// }).then(user=>console.log(user.get({plain: true})))

// tạo nhiều dòn trong table
// user.bulkCreate([
//     {username:"sdsf",password:"123"},
//     {username:"tsasadfdfin",password:"123"}
   
// ]).then(arr_user=>arr_user.forEach(user =>console.log(user.get({plain: true}))))


// xóa table

// user.destroy({
//     where:{
//         id:4
//     }
// })
// .then(row =>console.log(row))

// sửa table

// user.update({
//     password:"1111"
// },{
//     where:{id: 1}
// })
// .then(row =>console.log(row))

// tìm 1 phần tử
// user.findOne({raw: true})
// .then(user=>console.log(user))

// tìm tất cả
// user.findAll({raw: true})
// .then(arr_user=>arr_user.forEach(user=>console.log(user)))


// findById
// user.findById(5,{raw: true})
// .then(user=>console.log(user))


