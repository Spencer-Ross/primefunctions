/* eslint-env mocha, chai */
/*  global maxPrimeSum, chai */

describe('PrimeFunctions2', function () {
  describe('maxPrimeSum()', function () {
    it('should take less than 20ms', function () {
      this.slow(0);
      this.timeout(20);
      chai.expect(maxPrimeSum(10000)).to.eql([9521, 65]);
    });
  });
  describe('maxPrimeSum()', function () {
    it('should take less than 200ms', function () {
      this.slow(0);
      this.timeout(200);
      chai.expect(maxPrimeSum(100000)).to.eql([92951, 183]);
    });
  });
});
