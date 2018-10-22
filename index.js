const express = require('express')
const path = require('path')
const app = express()
const port = 8000

app.use(express.static(path.join(__dirname, 'views')));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => console.log('app listening on port'+port))



