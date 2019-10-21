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

// Iterative function to implement Binary Search
/* function binarySearch (arr, x) {
  let start = 0, end = arr.length - 1;

  // Iterate before start meets end
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // Find the mid index
    if (arr[mid] === x) return true; // If element is present at mid, return True
    if (arr[mid] < x) start = mid + 1; // Else look in left or right half accordingly
    else end = mid - 1;
  }

  return false;
} */

function maxPrimeSum(limit) {
  let result = 0;
  let n = 0;
  const primes = primeGen(limit+1);
  const sumPrimes = cumulativeSum(primes);
  // const notPrime = new Uint8Array(limit);

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

  /* let maxSum = 0;
  let maxRun = -1;
  for (let i = 0; i < primes.length; i++) {

    let sum = 0;
    for (let j = i; j < primes.length; j++) {
      sum += primes[j];
      if (sum > limit) break;
      if (!notPrime[sum] && sum > maxSum && j - i > maxRun) {
        maxRun = j - i;
        maxSum = sum;
      }
    }
  } */
}

/* const int limit = 1000000;
long result = 0;
int numberOfPrimes = 0;
long[] primes = ESieve(1,limit);
long[] primeSum = new long[primes.Length+1];

primeSum[0] = 0;
for (int i = 0; i < primes.Length; i++) {
    primeSum[i+1] = primeSum[i] + primes[i];
}

for (int i = numberOfPrimes; i < primeSum.Length; i++) {
    for (int j = i-(numberOfPrimes+1); j >= 0; j--) {
        if (primeSum[i] - primeSum[j] > limit) break;

        if (Array.BinarySearch(primes, primeSum[i] - primeSum[j]) >= 0) {
            numberOfPrimes = i - j;
            result = primeSum[i] - primeSum[j];
        }
    }
} */


// Driver code
/* let arr = primeGen(11);// [1, 3, 5, 7, 8, 9];
let x = 7;

if (binarySearch(arr, x)) console.log('Element found!');
else console.log('Element not found!');

x = 17;

if (binarySearch(arr, x)) console.log('Element found!');
else console.log('Element not found!'); */

maxPrimeSum(100);
