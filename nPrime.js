function nPrime(n) {
    var i = 1;
    while (n != 0) {
        if (isPrime(i)) {
            console.log(i + " ");
            n--;
        }
        i++;
    }
}
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
nPrime(10);
