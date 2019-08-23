const sequelize = require('sequelize')

const db = new sequelize({
    database: 'UnitChat',
    username: 'postgres',
    password: '1',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: { //Options
        ssl: false
    },
    define: { // not add 's' to model name
        freezeTableName: true
    }
})

// db.authenticate()
//     .then(() => console.log('>>>>>> ket noi thanh cong'))
//     .catch(err => console.log(err.message))

// const roomlists = db.define('roomlists',{
//     room_id: sequelize.STRING,
//     room_name: sequelize.STRING,
//     user_id: sequelize.STRING,

// })

const user = db.define('user', { // model : table in database
    id_user: sequelize.STRING,
    avatar: sequelize.STRING,
    emai: sequelize.STRING,
    name: sequelize.STRING,
    sub_id: sequelize.STRING,
    user_id: sequelize.STRING,
})
// user.create({
//     id_user: '123',
//     avatar: 'https://placeimg.com/140/140/any',
//     emai: 'dovantuit@gmail.com',
//     name: 'do van tu',
//     sub_id: '70965456',
//     user_id: '654564',
// }).then(user => console.log(user.get({ plain: true })))
// .catch(err =>console.log(err.message))

const roomlists = db.define('roomlists', { // model : table in database
    room_id: sequelize.STRING,
    room_name: sequelize.STRING,
    user_id: sequelize.STRING,
    id_guess: sequelize.STRING,
    id_owner: sequelize.STRING,
})
// roomlists.create({
//     room_id: '123',
//     room_name: 'phong 1',
//     user_id: 'dovantuit@gmail.com',
//     id_guess: '70965456235432',
//     id_owner: '70965456',
// }).then(roomlists => console.log(roomlists.get({ plain: true })))
// .catch(err =>console.log(err.message))

const messages = db.define('messages', {
    room_id: sequelize.STRING,
    message_id: sequelize.STRING,
    text: sequelize.STRING,
    user_id: sequelize.STRING,
    user_name: sequelize.STRING,
})
// messages.create({
//     room_id: '123',
//     message_id: '1232',
//     text: 'dsafd ',
//     user_id: '11231',
//     user_name: 'do van tom',
// }).then(messages => console.log(messages.get({ plain: true })))
// .catch(err =>console.log(err.message))

// db.sync() // tao model
//     .then(() => console.log('>>>>>> tao thanh cong'))
// update database 
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
// .catch(err=>console.log(err.message))

// sửa table

// user.update({
//     id_user:"1111"
// },{
//     where:{id: 2}
// })
// .then(row =>console.log(row[0]))
// .catch(err=>console.log(err.message))

// tìm 1 phần tử
// user.findOne({raw: true})
// .then(user=>console.log(user))

// tìm tất cả
// user.findAll({raw: true})
// .then(arr_user=>arr_user.forEach(user=>console.log(user)))

// findById
// user.findById(5,{raw: true})
// .then(user=>console.log(user))

// user.findAll({
//     where: {
//         id: [3,4]
//     },
//     raw: true
// })
//     .then(users =>console.log(users))
//     .catch(err => console.log(err.message))

module.exports = { user, messages, roomlists }