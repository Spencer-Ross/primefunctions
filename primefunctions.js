function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// This function takes a threshold number,and returns a list of prime
// numbers which are below that threshold.
function primeGen(num) {
  const array = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) array.push(i);
  }

  return array;
}

console.log(primeGen(10)); // test

// This function takes a list of numbers, and returns the cumulative sum of
// these numbers.
function cumulativeSum(nums) {
  const array = [];
  let sum = 0;

  for (const num of nums) {
    array.push(sum + num);
    sum += num;
  }

  return array;
}

console.log(cumulativeSum(primeGen(10))); // test


function maxPrimeSum(limit) {
  let result = 0;
  let n = 0;
  const primes = primeGen(limit + 1);
  const sumPrimes = cumulativeSum(primes);
  // sumPrimes.unshift(0);

  for (let i = 0; i < primes.length; i++) {
    for (let j = (n + 1) - i; j >= 0; j--) {
      if (sumPrimes[i] - sumPrimes[j] > limit) break;
      if (primes.includes(sumPrimes[i] - sumPrimes[j]) >= 0) {
        n = i - j;
        result = sumPrimes[i] - sumPrimes[j];
      }
    }
  }

  console.log(`max run = ${n}`);
  console.log(`max sum = ${result}`);

  // return result;
}

maxPrimeSum(1000);
