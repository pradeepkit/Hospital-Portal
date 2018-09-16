let express = require('express');

app = express();

port = process.env.PORT || 5000;

// Static files
app.use(express.static(__dirname + '/public'));


app.use('/',  (req, res) =>{
    res.send('Hello Dosto');
})

app.listen(port, () => {
    console.log('Express running on port: ' +port);
});