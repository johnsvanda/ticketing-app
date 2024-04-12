import express, { json } from 'express';
import 'express-async-errors';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/errror.middleware';
import { NotFoundError } from './errors/not-found.error';
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(currentUserRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler)

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (error) {
    console.log(error);
  }
};

start();

app.listen(3000, () => {
  console.log('Listening on port 3000!!');
});