import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);


userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    // Check if username exist
    const user = await User.findOne({ name: req.body.username });
    if (!user) {
      // Data to be inserted in MongoDB
      const userData = {
        name: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        isAdmin: false,
      }

      const newUser = await new User(userData).save();

      // Send user info
      res.send({ 
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: generateToken(newUser), });
      
      return;
    }
    res.status(401).send({ message: 'Username already exists' });
  })
    
);


userRouter.post(
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


export default userRouter;