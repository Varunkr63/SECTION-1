function isPrime(n) {

    if (n < 2)
        return '$(n) is not a prime'


    for (let i = 2; i < n; i++) {
        if (n % i === 0) {

            return '$(n) is not a prime number'

        }
    }
    return '$(n) is a prime number'

}
console.log(isPrime(11));


console.log(1111111111111111);

function getPrimes(max) {
    const sieve = [];
    const primes = [];

    for (let i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }

    return primes;
}

const primeNumbers = getPrimes(100);
console.log("Prime numbers between 1 and 100:", primeNumbers);

const lowernumber = parseInt(prompt('enter a number:'));
const highernumber = parseInt(prompt('enter a number:'));
console.log('the prime number between ${lowernumber} and ${highernumber} are: ');
//looping from lower number to higher number 


for (let i = lowernumber; i <= highernumber; i++) {
    let flag = 0;


    //looping through 0 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }

        // if number is greater than 1 and not divisible by other numbers

        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
 





