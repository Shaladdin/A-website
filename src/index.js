const express = require('express');

const api = express();

api.use(express.static(__dirname + '/public/Page'))

api.listen(3000, () => {
    console.log('API up and running');
});

// api.get('/', (req, res) => {
//     res.send('<h1>hello, world!<h1>');
//     console.log('yo');
// });