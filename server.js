// Setting up app dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Create Express server and set the PORT
const app = express();
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets up Express to use handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up routes
const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
// static files under public folder need express setup
app.use(express.static(__dirname + '/public'));

// Listening on PORT
app.listen(PORT, function() {
  console.log('App listening on port', PORT);
});