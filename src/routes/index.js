import express from 'express';
import accountsRoutes from './accounts';
import transactionsRoutes from './transactions';
import userRoutes from './users'


const router = express();

router.get('/', (req, res) => res.status(200).json ({
    status: res.statusCode,
    message: 'Hello World!',
}),
);

router.use('/accounts', accountsRoutes);
router.use('/transactions', transactionsRoutes);
router.use('/auth', userRoutes);

export default router;