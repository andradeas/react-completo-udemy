const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    res.send('MUDEI A APII')
});

server.listen(3000, () => {
    console.log('API ONLINE');
});
