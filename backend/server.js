import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import cartRouter from './routers/cartRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//middleware/error catcher
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
});