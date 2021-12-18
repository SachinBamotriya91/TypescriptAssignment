function fibonaciiNumber(n) {
    var num1 = 0;
    var num2 = 1;
    console.log("Fibonacci Series of " + n + " numbers:");
    for (var i = 1; i <= n; i++) {
        console.log(num1 + " ");
        var sumOfPrevTwo = num1 + num2;
        num1 = num2;
        num2 = sumOfPrevTwo;
    }
}
fibonaciiNumber(10);
