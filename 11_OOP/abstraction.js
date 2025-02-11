// Abstraction is the process of hiding the complex implementation details 
// and showing only the necessary features of the object.

// Abstraction using classes

class CoffeMachine {

    start() {
        // get database
        // connect to the database
        // get the data
        return `Machine is starting...`;
    }

    getWater() {
        // do complex calculation
        return `Getting water...`;
    }

    getBeans() {
        // do complex calculation
        return `Getting beans...`;
    }

    brewCoffee() {

        // do complex calculation
        return `Brewing coffee...`;
    }

    close() {
        // close the connection
        return `Machine is closed`;
    }

    pressStartButton() {
        let msgStart = this.start();
        let msgWater = this.getWater();
        let msgBeans = this.getBeans();
        let msgBrew = this.brewCoffee();
        let msgClose = this.close();
        return `${msgStart} \n${msgWater} \n${msgBeans} \n${msgBrew} \n${msgClose}`;
    }
}

let machine = new CoffeMachine();
console.log(machine.pressStartButton());



