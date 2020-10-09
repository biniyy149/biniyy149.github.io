function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
    }
    //alert( factorial(5) ); // 120
    let user = {
        firstName: "John",
        sayHi() {
        console.log((`Hello, ${this.firstName}!`));
        }
        };
        setTimeout(() => user.sayHi(), 0);
        // ...within 1 second
        user = { sayHi() { console.log(("Another user in setTimeout!")); } };
        // Another user in setTimeout?!?
    