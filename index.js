
var express = require("express");
var app = express();
const bodyParser = require('body-parser');
const { user, messages, roomlists } = require('./db.js')
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.set("views","./views")

var server = require("http").Server(app);
server.listen(3000, () => console.log('server chay port 3000'));
app.use(bodyParser.urlencoded({ extended: true }))
// app.get("/",function(req,res){
//     res.render("trangchu");
// });
app.get("/", (req, res) => res.send('xin chao'));

app.get('/user_read', (req, res) => {
    user.findAll()
        .then((users) => res.json({ 'kq': 1, 'user': users }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/user_add', (req, res) => {
    let id_user = req.body.id_user
    let avatar = req.body.avatar
    let emai = req.body.emai
    let name = req.body.name
    let sub_id = req.body.sub_id
    let user_id = req.body.user_id
    user.create({
        id_user: id_user,
        avatar: avatar,
        emai: emai,
        name: name,
        sub_id: sub_id,
        user_id: user_id,

    }).then(() => res.json({ 'kq': 1 }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/user_update', (req, res) => {
    // const { id,
    //     // id_user,
    //     //avatar,
    //     emai,
    //     //name,
    //     //sub_id,
    //     //user_id } = req.body
    console.log(req.body);
    // console.log(req.body);
    let emai = req.body.emai;
    console.log(emai);
    let id = req.body.id
    user.update({
        //id: id,
        ///id_user: id_user,
        //avatar: avatar,
        emai: emai
        //name: name,
        //sub_id: sub_id,
        //user_id: user_id

    }, {
            where: { id: id }
        })
        .then((row) => res.json({ 'kq': 1, 'row': row[0] }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/user_delete', (req, res) => {
    const { id } = req.body
    user.destroy({
        where: { id: id } //id thu 2 la id lay tu req.body
    })
        .then((row) => res.json({ 'kq': 1, 'row': row }))
        .catch(err => res.json({ 'kq': 0 }))
})

// roomlists
app.get('/roomlists_read', (req, res) => {
    roomlists.findAll()
        .then((roomlists) => res.json({ 'kq': 1, 'roomlists': roomlists }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/roomlists_add', (req, res) => {
    const room_id = req.body.room_id
    const room_name = req.body.room_name
    const user_id = req.body.user_id
    const id_guess = req.body.id_guess
    const id_owner = req.body.id_owner

    roomlists.create({
        room_id: room_id,
        room_name: room_name,
        user_id: user_id,
        id_guess: id_guess,
        id_owner: id_owner,

    }).then(() => res.json({ 'kq': 1 }))
        .catch(err => res.json({ 'kq': 0 }))
})


// messages
app.get('/messages_read', (req, res) => {
    messages.findAll()
        .then((messages) => res.json({ 'kq': 1, 'messages': messages }))
        .catch(err => res.json({ 'kq': 0 }))
})