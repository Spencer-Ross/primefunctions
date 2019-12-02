function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// This function takes a threshold number,and returns a list of prime
// numbers which are below that threshold.
/* function primeGen(num) {
  const array = [];
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (isPrime(i)) array.push(i);
  }

  return array;
} */

function primeGen(num) {
  const array = new Array(num).fill(true);

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (array[i]) {
      for (let j = i * i; j < num; j += i) {
        array[j] = false;
      }
    }
  }

  return array.reduce((primes, primeCheck, i) => {
    if (primeCheck && i > 1) {
      primes.push(i);
    }

    return primes;
  }, []);
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
  let maxSum = 0;
  let maxRun = 0;
  let sum;
  const primes = primeGen(limit);
  // const sumPrimes = cumulativeSum(primes);

  for (let i = 0; i < primes.length; i++) {
    sum = 0;

    for (let j = i; j < primes.length; j++) {
      sum += primes[j];
      if (sum > limit) break;
      if (isPrime(sum) && sum > maxSum && j - i > maxRun) {
        maxRun = j - i;
        maxSum = sum;
      }
    }
  }

  const result = [maxSum, maxRun + 1];
  return result;
}

console.log(maxPrimeSum(100));
