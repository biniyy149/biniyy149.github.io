function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
    }
    console.log(f(1)); // 1
    function User(name){
        this.name = name;
    }
    User.prototype.sayHi = function(){
        return this.name;
    }
    let user1 = new User("bini");
    console.log(user1.sayHi);
