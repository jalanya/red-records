const express = require('express');
const path = require('path');
const app = express();

// TODO: Create a kind of a server static middleware 
// to serve all static assets for all webapps or ...

// react-scripts build is creating a subfolder called static for assets
app.use('/static', express.static(path.join(__dirname,'/../music/build/static')));

app.use('/mfe/music', express.static(path.join(__dirname,'/../music/build')));

// vue-cli-service build is creating subfolders (js,css,imge) for assets
app.use('/js', express.static(path.join(__dirname,'/../welcome/dist/js')));
app.use('/css', express.static(path.join(__dirname,'/../welcome/dist/css')));
app.use('/img', express.static(path.join(__dirname,'/../welcome/dist/img')));

app.use('/mfe/welcome', express.static(path.join(__dirname,'/../welcome/dist')));

app.use('/', express.static('./bootstrap/dist'));

app.listen(8080, () => console.log('Web server running on 8080'));
