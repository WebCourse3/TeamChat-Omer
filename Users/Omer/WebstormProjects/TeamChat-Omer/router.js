const express = require('express');
const router = express.Router();
let mUsers = require('./mock/users').mock;
const  chat_router = require('./chat_router').router;

router.post('/login', function (req,res) {
    let username,password;

    username = req.body.username;
    password = req.body.password;

    let user = mUsers.find(usr => {
        return usr.name === username
    });

    if (user === undefined){
        console.log(`Cannot find ${username}`);
        res.send(JSON.stringify({name: "bad username"}));
    }
    else {
        if (user.password === password) {
            console.log(`user ${user.name} have logged in, sending JSON of ${user}`);
            res.send(JSON.stringify(user));
        }
        else {
            console.log(`user ${user.name} tried to login with bad password ${password}`);
            res.send(JSON.stringify({name: "bad password"}));
        }
    }
});

router.post('/signup',function (req,res) {
    let id,username,password;

    username = req.body.username;
    password = req.body.password;
    id = mUsers[mUsers.length -1].id +1;

    let user = mUsers.find(usr =>{
        return usr.name === username;
    });

    if (user !== undefined) {
        console.log(`User '${username}' already exist, cannot create new user`);
        res.send(JSON.stringify({answer: "user exist"}));
    }
    else {
        let fulluser = {
            id: id,
            name: username,
            password: password,
            text_color: 'black',
            isBold: false,
            isItallic: false
        };

        mUsers.push(fulluser);
        console.log(`User '${username}' has been created`);
        let user = mUsers.find(usr => {
            return usr.id === fulluser.id;
        });
        res.send(JSON.stringify(user));
    }
});

router.use('/chat', chat_router);

module.exports.router = router;