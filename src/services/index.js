import accountsServices from './accounts';
import transactionsServices from './transactions';
import usersServices from './users';



export const { create, findAll, findByAccountNumber, deleteAccount } = accountsServices;
export const { debit, findTransactions } = transactionsServices;
export const { signup, login } = usersServices;