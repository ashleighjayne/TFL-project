var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;
var router = express.Router();

// Point static files to the build directory
app.use(express.static('build'));

// Routing to homepage
router.get('/', function (req, res, next) {
    if (true) {
        //res.sendFile(__dirname + '/build/templates/homepage.html');
        // res.send('Hello, World!');
        res.sendFile(__dirname + '/index.html');
    } else {
        next();
    }
})

// Routing for article pages
// router.get('/article/:articleId', function(req, res) {
//     var location = __dirname + '/build/templates/article-' + req.params.articleId + '.html';

//     // Display article page if no errors else redirect to 404 page
//     fs.access(location, fs.constants.R_OK, (err) => {
//         if (!err) {
//             //res.sendFile(location);
//             res.send('Hello, World!');
//         } else {
//             //res.status(404).sendFile(__dirname + '/build/templates/error404.html');
//             res.send('Hello, World!');
//         }
//     });
// });

app.use('/', router);

// Redirect to 404 page if path/file does not exist
// app.use(function (req, res, next) {
//     res.status(404).sendFile(__dirname + '/build/templates/error404.html');
// });

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
