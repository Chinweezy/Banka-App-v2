import chai from 'chai';
import { signup, login } from '../../services';

chai.should();

describe('User Service', () => {
  describe('Signup UserService', () => {
    it('should create a new user when all the fields are provided', () => {
      const user = {
        id: 1,
        token: '45erkjherht45495783',
        email: 'test@gmail.com',
        firstname: 'Admin',
        lastname: 'Admin',
        password: "admin",
        type: 'staff',
        isAdmin:false
      };
      const newUser = signup(user);
      newUser.should.be.a('object');
      newUser.should.have.property('id');
      newUser.should.have.property('token');
      newUser.should.have.property('email');
      newUser.should.have.property('firstname');
      newUser.should.have.property('lastname');
      newUser.should.have.property('password');
      newUser.should.have.property('type');
      newUser.should.have.property('isAdmin');
    });
  });
// describe('User Service', () => {
//   describe('Signup UserService', () => {
//     it('should create a new user when all the fields are provided', () => {
//       signup().should.be.a('array');
//       signup()[0].should.have.property('id');
//       signup()[0].should.have.property('token');
//       signup()[0].should.have.property('email');
//       signup()[0].should.have.property('firstname');
//       signup()[0].should.have.property('lastname');
//       signup()[0].should.have.property('password');
//       signup()[0].should.have.property('type');
//       signup()[0].should.have.property('isAdmin');
//     });
//   });

  describe('Login UserService', () => {
    it('login an existing user', () => {
        const user = {
            id: 1,
            token: '45erkjherht45495783',
            email: 'test@gmail.com',
            firstname: 'Admin',
            lastname: 'Admin',
            password: "admin",
            type: 'staff',
            isAdmin:false
          };

          const loggedUser = login(user);
          loggedUser.should.be.a('object');
          loggedUser.should.have.property('id');
          loggedUser.should.have.property('token');
          loggedUser.should.have.property('email');
          loggedUser.should.have.property('firstname');
          loggedUser.should.have.property('lastname');
          loggedUser.should.have.property('password');
          loggedUser.should.have.property('type');
          loggedUser.should.have.property('isAdmin');
        });
      });

//         login().should.be.a('object');
//         login()[0].should.have.property('id');
//         login()[0].should.have.property('token');
//         login()[0].should.have.property('email');
//         login()[0].should.have.property('firstname');
//         login()[0].should.have.property('lastname');
//         login()[0].should.have.property('password');
//         login()[0].should.have.property('type');
//         login()[0].should.have.property('isAdmin');
//     });
//   });
});