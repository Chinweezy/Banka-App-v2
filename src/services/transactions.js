import accounts from "./accounts"
class transactionsService {
    constructor() {
      this.transactions = [
        {
          transactionId: 1 ,
          accountNumber: 4027597201,
          amount: 5000.00,
          cashier: 1, // cashier that consumated the transaction
          transactionType: "Debit",
          accountBalance: 10000.00,
        //   firstName:"Admin",
        //   lastName: "Admin",
        },
        {
          transactionId: 2 ,
          accountNumber: 4027597202,
          amount: 10000.00,
          cashier: 3, // cashier that consumated the transaction
          transactionType: "Credit",
          accountBalance: 15000.00,
        //   firstname:"test",
        //   lastname: "test",
        },
        {
          transactionId: 3,
          accountNumber: 4027597203,
          amount: 2000.00,
          cashier: 2, // cashier that consumated the transaction
          transactionType: "Debit",
          accountBalance: 7000.00,
        //   firstname:"cover",
        //   lastname: "travis",
        },
      ];
  
      // this.findByAccountNumber = this.findByAccountNumber.bind(this);
      this.findTransactions = this.findTransactions.bind(this);
      this.debit = this.debit.bind(this);
      this.findByAccountNumber = this.findByAccountNumber.bind(this);
    //   this.findByTitle = this.findByTitle.bind(this);
      // this.deleteAccount = this.deleteAccount.bind(this);
    }
  
    debit(data) {
      data.transactionId = this.transactions.length + 1;
      data.accountNumber = accounts.accountNumber;
      data.transactionType = "Debit";
      data.accountBalance = accounts.currentBalance - data.amount;
      this.transactions.push(data);
      return data;
    }

  
    // findByTitle(title) {
    //   return this.users.filter(book => users.title === title);
    // }
  
    findByAccountNumber(accountNumber) {
      return this.accounts.find(account => account.accountNumber === parseInt(accountNumber));
    }
  
    findTransactions() {
      return this.transactions;
    }
  
//     deleteAccount(accountNumber) {
//       this.accounts = this.accounts.filter(account => account.accountNumber !== parseInt(accountNumber));
//     }
  };
  
  export default new transactionsService();