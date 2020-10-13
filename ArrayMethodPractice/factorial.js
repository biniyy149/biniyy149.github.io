function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
    }
    //alert( factorial(5) ); // 120
    let user = {
        firstName: "John",
        sayHi() {
        //console.log((`Hello, ${this.firstName}!`));
        }
        };
        setTimeout(() => user.sayHi(), 0);
        // ...within 1 second
        user = { sayHi() { //console.log(("Another user in setTimeout!")); } };
        // Another user in setTimeout?!?
        let animal = {
            walk() {
            if (!this.isSleeping) {
            console.log(`I walk`);
            }
            },
            sleep() {
            this.isSleeping = true;
            }
            };
            let rabbit = {
            name: "White Rabbit",
            __proto__: animal
            };
            // modifies rabbit.isSleeping
            //rabbit.sleep();
            //animal.sleep();
            //console.log(rabbit.isSleeping); // true
            //console.log(animal.isSleeping);
        }
    }
    let animal = {
        eats: true,
        sleeping: false,
        say: function(){'helo';}
        };
        let rabbit = {
        jumps: true,
        __proto__: animal
        };
        // Object.keys only return own keys
        console.log(Object.keys(animal)); // jumps
        // for..in loops over both own and inherited keys
        for(let prop in rabbit) console.log(prop); // jumps, then eats