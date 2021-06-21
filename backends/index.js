const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// create express app
const app = express();


// setup the server port
const port = process.env.PORT || 5000;
app.use(cors())


// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// import employee routes
const userRoutes = require('./src/routes/user.route');
const monumentsRoutes = require('./src/routes/monuments.route');
const visiteRoutes = require('./src/routes/visite.route');


app.set("view engine", "ejs");
app.use('/api/v1/user', userRoutes);
app.use('', monumentsRoutes);
app.use('', visiteRoutes);







// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});