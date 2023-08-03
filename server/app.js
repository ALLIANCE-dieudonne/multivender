const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ErrorHandler = require('./middleware/error');

const app = express();

// Middleware
app.use(
  cors({
    origin: 'https://emarket-jet.vercel.app',
    credentials: true,
    maxAge: 3600 
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// Routes
const userRoutes = require('./controller/user');
const shopRoutes = require('./controller/shop');
const productRoutes = require('./controller/product');
const eventRoutes = require('./controller/event');
const couponRoutes = require('./controller/couponCode');
const paymentRoutes = require('./controller/payment');
const orderRoutes = require('./controller/order');
const conversationRoutes = require('./controller/conversation');
const messageRoutes = require('./controller/message');
const withdrawRoutes = require('./controller/withdraw');

app.use('/api/v2/user', userRoutes);
app.use('/api/v2/conversation', conversationRoutes);
app.use('/api/v2/message', messageRoutes);
app.use('/api/v2/order', orderRoutes);
app.use('/api/v2/shop', shopRoutes);
app.use('/api/v2/product', productRoutes);
app.use('/api/v2/event', eventRoutes);
app.use('/api/v2/coupon', couponRoutes);
app.use('/api/v2/payment', paymentRoutes);
app.use('/api/v2/withdraw', withdrawRoutes);

// Error handling middleware
app.use(ErrorHandler);

module.exports = app;