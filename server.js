const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const router = require('./router').router;
var io = require('socket.io')(http);

module.exports.io = io;
// Angular Dist
app.use(express.static(path.join(__dirname+ '\\teamchat', 'dist')));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// All Requests to the Router
app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '\\teamchat', 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));