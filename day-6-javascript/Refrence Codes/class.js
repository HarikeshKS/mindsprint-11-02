class Account {
    constructor(accNo, holderName, balance) {
        this.accNo = accNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    diposit(amount) {
        this.balance += amount;
        console.log(`${amount} is Credited to the account No ******${this.accNo.slice(6)}
        Available Balance ${this.balance}`)
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            console.log(`${amount} is debited from your account No ******${this.accNo.slice(6)}
        Available Balance ${this.balance}`)
        }else{
            console.log('No sufficient Balance available')
        }
    }
}

const acc1= new Account('1900129876',"Sonam Soni",90000);
acc1.diposit(10000);
acc1.withdraw(80000);