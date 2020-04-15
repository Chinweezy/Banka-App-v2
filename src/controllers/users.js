import { signup, login } from '../services';
import Response from '../utils';

const { ok, created, notFound} = Response;

class usersController {
    static signup(req, res) {
        const {token, id, firstname, lastname, email, isAdmin, type, password }  = req.body;
        return created(res, signup({token, id, firstname, lastname, email, isAdmin, type, password}));
    }

    static login(req, res) {
        const {token, id, firstname, lastname, email, isAdmin, type } = req.body;
        return ok(res, login({token, id, firstname, lastname, email, isAdmin, type}))
    }
}

export default usersController;