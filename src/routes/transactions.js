import express from 'express';
import { debit, findTransactions, findByAccountNumber } from '../controllers';

const transactionsRoutes =  express.Router();

transactionsRoutes
    .route('/')
    .get(findTransactions)

    transactionsRoutes
        .route('/:accountNumber')
        .get(findByAccountNumber)

        transactionsRoutes
            .route('/:accountNumber/debit')
            .post(debit);


export default transactionsRoutes;