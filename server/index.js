const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static('./bootstrap/dist'));
app.use('/mfe/music', express.static(path.resolve(__dirname,'../music/build')));
app.use('/mfe/welcome', express.static(path.resolve(__dirname,'../welcome/dist')));

app.listen(8080, () => console.log('Web server running on 8080'));
