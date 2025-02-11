// static method

// static can be any method and variables

class Calculator {
    static a = 0;
    static b = 0;

    // static is a specific method that can be call only by class itself.
    static add() {
        return this.a + this.b;
    }

    static subtract() {
        return this.a - this.b;
    }
}

// let cal = new Calculator();
// cal.a = 10;
// cal.b = 20;

// console.log(cal.add());
// console.log(cal.subtract());

// So its mean we can call it by class name, we can't call it by its varible etc...
Calculator.a = 10;
Calculator.b = 20;

console.log(Calculator.add());
console.log(Calculator.subtract());