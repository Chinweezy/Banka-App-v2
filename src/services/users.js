class usersService {
    constructor() {
      this.users = [
        {
          id: 1,
          token: "45erkjherht45495783",
          email: "test@gmail.com",
          firstname:"Admin",
          lastname: "Admin",
          password: "admin",
          type: "staff",
          isAdmin: true
        },
        {
          id: 2,
          token: "45erkjherht45495783",
          email: "test@heroku.co.uk",
          firstname:"test",
          lastname: "test",
          password: "test",
          type: "client",
          isAdmin: false
        },
        {
          id: 3,
          token: "45erkjherht45495783",
          email: "test@coveralls.net",
          firstname:"cover",
          lastname: "travis",
          password: "testing",
          type: "client",
          isAdmin: false
        },
      ];
      
      this.signup = this.signup.bind(this);
      this.login = this.login.bind(this);
    }
  
    signup(data) {
      data.id = this.users.length + 1;
      data.token = "45erkjherht45495783";
      this.users.push(data);
      return data;
    }

    login(data) {
      data.id = this.users.length + 1;
      data.token = "45erkjherht45495783";
      this.users.push(data);
      return data;
    }
};
  
  export default new usersService();