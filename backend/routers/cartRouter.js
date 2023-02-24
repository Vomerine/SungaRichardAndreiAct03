import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const cartRouter = express.Router();

cartRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.body.userId);
    const cart = user.cart.toJSON();
    const cartKeys = Object.keys(cart);

    // Get user's products using the array of cartKeys
    // .lean() converts it from Mongoose object to native js object
    const cartItems = await Product.find({ '_id': { $in: cartKeys } }).lean();
    
    // Concatenate the product's quantity
    Object.values(cartItems).forEach(value=> {
      value['qty'] = cart[value['_id']];
    });

    res.send(cartItems);
  })
);

cartRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);


cartRouter.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.body.userId)
    const productId = req.body.productId;
    var qty = req.body.qty;
    
    // Check if product is already in user's cart and increment it
    let productQty = user.cart.get(productId);
    if(productQty) {
      qty += productQty;
      user.cart.set(productId, qty);
    }
    else
      user.cart.set(productId, qty);

    if(user.save()){
      return
    }  
  })
    
);


cartRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);


export default cartRouter;