function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    alert( fib(3) ); // 2
    alert( fib(7) ); // 13
    // fib(77); // will be extremely slow!