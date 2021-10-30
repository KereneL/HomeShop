import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import cartRoutes from './routes/cart.routes.js';
import categoryRoutes from './routes/category.routes.js';
import orderRoutes from './routes/order.routes.js';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(json());
app.use(cors());

dotenv.config();

const uri = process.env.MONGO_URI;


app.use('/api/cart/', cartRoutes);
app.use('/api/category/', categoryRoutes);
app.use('/api/order/', orderRoutes);
app.use('/api/product/', productRoutes);
app.use('/api/user/', userRoutes);



var mongoFlag = false;
var serverFlag = false;

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB connection established successfully');
	mongoFlag = true;
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
	serverFlag = true
});