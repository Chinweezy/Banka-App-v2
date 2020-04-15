import { findAll, findByAccountNumber, create, deleteAccount } from '../services';
import Response from '../utils';

const { ok, created, conflict, notFound } = Response;


class accountsController {
  static create(req, res) {
    const { accountNumber, firstName, lastName, email, type, openingBalance } = req.body;
    // if (findByTitle(title).length > 0) return conflict(res, 'Book already exists');
    return created(res, create({ accountNumber, firstName, lastName, email, type, openingBalance }));
  }

  static findByAccountNumber(req, res) {
    if (findByAccountNumber(req.params.accountNumber)) return ok(res, findByAccountNumber(req.params.accountNumber)); 
    return notFound(res);
  }

  static findAll(req, res) {
    return ok(res, findAll());
  }

  static deleteAccount(req, res) {
    if (!findByAccountNumber(req.params.accountNumber)) return notFound(res);
    deleteAccount(req.params.accountNumber);
    return ok(res,{message: 'Account successfully deleted'});
  }
}

export default accountsController;