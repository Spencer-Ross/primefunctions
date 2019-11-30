var expect = require('chai').expect;

describe('PrimeFunctions', function () {
  const testNum1 = 10;
  const testNum2 = 20;
  const testArr1 = [1, 2, 3, 4];
  const testArr2 = [10, 11, 12, 13, 14];
  const testNum3 = 100;
  const testNum4 = 1000;

  describe('primeGen()', function () {
    it('should return [2, 3, 5, 7] for testNums1', function () {
      chai.expect(primeGen(testNums1)).to.equal([2, 3, 5, 7]);
    });
  });
  describe('primeGen()', function () {
    it('should return [2, 3, 5, 7, 11, 13, 17, 19] for testNums2', function () {
      chai.expect(primeGen(testNums2)).to.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe('cumulativeSum()', function () {
    it('should return [1, 3, 6, 10] for testArr1', function () {
      chai.expect(cumulativeSum(testArr1)).to.equal([1, 3, 6, 10]);
    });
  });
  describe('cumulativeSum()', function () {
    it('should return [1, 3, 6, 10] for testArr2', function () {
      chai.expect(cumulativeSum(testArr2)).to.equal([10, 21, 33, 46, 60]);
    });
  });
  describe('maxPrimeSum()', function () {
    it('should return [41, 6] for testNum3', function () {
      chai.expect(maxPrimeSum(testNum3)).to.equal([41, 6]);
    });
  });
  describe('maxPrimeSum()', function () {
    it('should return [953, 21] for testNum4', function () {
      chai.expect(maxPrimeSum(testNum4)).to.equal([953, 21]);
    });
  });
});
