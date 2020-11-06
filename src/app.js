const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

mongoose.connect('mongodb://localhost/prubaCrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})
    .then(db =>console.log('db conect'))
    .catch(err => console.log(err));
    

const indexRoutes = require('./routes/index');

 // setings    
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

app.listen(app.get('port') , ()=>{
     console.log(`server on port ${app.get('port')}`);
});