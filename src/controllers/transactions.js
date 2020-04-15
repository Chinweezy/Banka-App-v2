import { findTransactions, debit, findByAccountNumber } from '../services';
import Response from '../utils';

const { ok, conflict, notFound } = Response;

class transactionsController {
//   static create(req, res) {
//     const { accountNumber, firstName, lastName, email, type, openingBalance } = req.body;
//     // if (findByTitle(title).length > 0) return conflict(res, 'Book already exists');
//     return created(res, create({ accountNumber, firstName, lastName, email, type, openingBalance }));
//   }

  static debit(req, res) {
      const { transactionId, accountNumber, cashier, transactionType, accountBalance, amount } = req.body;
      return ok(res, debit({transactionId, accountNumber, cashier, transactionType, accountBalance, amount})); 
  }

  static findTransactions(req, res) {
    return ok(res, findTransactions());
  }

  static findByAccountNumber(req, res) {
    if (findByAccountNumber(req.params.accountNumber)) return ok(res, findByAccountNumber(req.params.accountNumber)); 
    return notFound(res);
  }
//   static deleteAccount(req, res) {
//     if (!findByAccountNumber(req.params.accountNumber)) return notFound(res);
//     deleteAccount(req.params.accountNumber);
//     return ok(res,{message: 'Account successfully deleted'});
  // }
};

export default transactionsController;