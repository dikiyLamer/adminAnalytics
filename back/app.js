const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./controllers/auth.controller');
const analyticRoutes = require('./controllers/analytic.controller');
const categoryRoutes = require('./controllers/category.controller');
const orderRoutes = require('./controllers/order.controller');
const positionRoutes = require('./controllers/position.controller');

const app = express();

mongoose
    .connect('mongodb://root:root@localhost:27017/admin')
    .then(() => {
        console.log('connected');
    })
    .catch((e) => console.log(e));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytic', analyticRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
