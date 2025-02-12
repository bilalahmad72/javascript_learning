
// Encapsulation is the bundling of data with the methods that operate on that data, 
// or the restricting of direct access to some of an object's components.

// Encapsulation is used to hide the values or state of a structured data object inside a class,
// preventing unauthorized parties' direct access to them.

// Encapsulation is used to prevent direct access of the object data from outside the class.

class BankAccount {

    // # symbol is used to make the private the variables inside the class
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }


    getBalance() {
        return `Your balance is $ ${this.#balance}`;
    }
}

let bank = new BankAccount();
bank.deposit(100);
bank.deposit(200);
bank.deposit(50);
console.log(bank.getBalance());

