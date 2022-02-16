import express, { application } from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
const app= express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 });

app.get('/product/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({message: 'Product is not found'})
    }
})

// Hotfix for add to cart
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({message: 'Product is not found'})
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.use('/api/users', userRouter);

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