class Employee {

    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if(value < 0) {
            console.log("Invalid Salary");
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Bilal Ahmad", 40000);

console.log(emp.salary);
