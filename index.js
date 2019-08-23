
var express = require("express");
var app = express();
const bodyParser = require('body-parser');
const user = require('./db.js')


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


app.post('/add', (req, res) => {
    const id_user = req.body.id_user
    const avatar = req.body.avatar
    const emai = req.body.emai
    const name = req.body.name
    const sub_id = req.body.sub_id
    const user_id = req.body.user_id

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

app.get('/read', (req, res) => {
    user.findAll()
        .then((users) => res.json({ 'kq': 1, 'user': users }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/update', (req, res) => {
    const { id,
        id_user,
        avatar,
        emai,
        name,
        sub_id,
        user_id } = req.body
    user.update({
        id_user: id_user,
        avatar: avatar,
        emai: emai,
        name: name,
        sub_id: sub_id,
        user_id: user_id

    }, {
            where: { id: id }
        })
        .then((row) => res.json({ 'kq': 1, 'row': row[0] }))
        .catch(err => res.json({ 'kq': 0 }))
})

app.post('/delete', (req, res) => {
    const { id } = req.body
    user.destroy({
        where: { id: id } //id thu 2 la id lay tu req.body
    })
        .then((row) => res.json({ 'kq': 1, 'row': row }))
        .catch(err => res.json({ 'kq': 0 }))
})
