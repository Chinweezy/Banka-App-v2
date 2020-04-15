import express from 'express';
import { signup, login } from '../controllers';

const userRoutes = express.Router();

userRoutes
    .route('/signup')
    .post(signup);

    userRoutes
        .route('/signin')
        .post(login);

export default userRoutes;