class accountsService {
    constructor() {
      this.accounts = [
        {
          accountNumber: 4027597201,
          firstName:"Admin",
          lastName: "Admin",
          email: "test@gmail.com",
          type: "Savings",
          openingBalance: 5000.00,
          currentBalance: 15000.00
        },
        {
          accountNumber: 4027597202,
          firstname:"test",
          lastname: "test",
          email: "test@heroku.co.uk",
          type: "Current",
          openingBalance: 5000.00,
          currentBalance: 5000.00
        },
        {
          accountNumber: 4027597203,
          firstname:"cover",
          lastname: "travis",
          email: "test@coveralls.net",
          type: "Current",
          openingBalance: 5000.00,
          currentBalance: 9000.00
        },
      ];
  
      this.findByAccountNumber = this.findByAccountNumber.bind(this);
      this.findAll = this.findAll.bind(this);
      this.create = this.create.bind(this);
    //   this.findByTitle = this.findByTitle.bind(this);
      this.deleteAccount = this.deleteAccount.bind(this);
    }
  
    create(data) {
      // data.accountNumber = this.accounts.length + 1;
      data.openingBalance = 5000.00
      this.accounts.push(data);
      return data;
    }
  
    // findByTitle(title) {
    //   return this.users.filter(book => users.title === title);
    // }
  
    findByAccountNumber(accountNumber) {
      return this.accounts.find(account => account.accountNumber === parseInt(accountNumber));
    }
  
    findAll() {
      return this.accounts;
    }
  
    deleteAccount(accountNumber) {
      this.accounts = this.accounts.filter(account => account.accountNumber !== parseInt(accountNumber));
    }
  };
  
  export default new accountsService();