// load the things we need
var express = require('express');
const { models } = require('./libs/sequelize')
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
// use res.render to load up an ejs view file

// index page 
app.get('/',async function(req, res) {
     const data = await models.User.findAll()
        console.log(data, 'data')

    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});
const port = process.env.PORT || 3000;
app.listen(port);
console.log(port +' is the magic port');
