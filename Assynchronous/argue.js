function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
    }
    console.log(f(1)); // 1