const express = require('express');
const app = express();
const morgan = require('morgan');

//Puerto
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.use('/api/animales',require('./routes/Animales.js'));
