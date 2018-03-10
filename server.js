// Setting up app dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Create Express server and set the PORT
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets up Express to use handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
// static files under public folder need express setup
app.use(express.static(__dirname + '/public'));

// Listening on PORT
app.listen(PORT, function() {
  console.log('App listening on port', PORT);
});