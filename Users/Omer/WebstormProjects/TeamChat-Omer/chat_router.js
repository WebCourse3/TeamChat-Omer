const express = require('express');
const router = express.Router();
const chatrooms = require('./mock/chatrooms').mock;

router.get('/:name/messages', function (req, res) {
    let roomName = req.params.name;

    let messages = chatrooms[roomName];

    res.send(JSON.stringify(messages));
});

router.post('/:name/add', function (req,res) {
    let roomName = req.params.name;
    let username =req.body.username;
    let message = req.body.message;

    console.log(`added message: ${message}`);

    let parsed_message = JSON.stringify({username:username, message:message});
    chatrooms[roomName].push(parsed_message);
    res.send(parsed_message);
});
module.exports.router = router;