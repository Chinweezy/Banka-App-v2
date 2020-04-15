import accountsController from './accounts';
import transactionsController from './transactions';
import usersController from './users';


export const { create, findAll, deleteAccount, findByAccountNumber } = accountsController;
export const { debit, findTransactions } = transactionsController;
export const { signup, login } = usersController;