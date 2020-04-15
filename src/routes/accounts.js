import express from 'express';
import { create, findByAccountNumber, findAll, deleteAccount} from '../controllers';

const accountRoutes =  express.Router();

accountRoutes
    .route('/')
    .post(create)
    .get(findAll);

    accountRoutes
        .route('/:accountNumber')
        .get(findByAccountNumber)
        .delete(deleteAccount);


export default accountRoutes;