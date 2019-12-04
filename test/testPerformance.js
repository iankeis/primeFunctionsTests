describe('Test for Performance', function () {

  describe('maxPrimeSum', function () {
    it('maxPrimeSum(10000) = [9521, 65]', function () {
      this.slow(0);
      this.timeout(20);
      chai.expect(maxPrimeSum(10000)).to.deep.equal( [9521, 65] );
    });
    it('maxPrimeSum(100000) = [92951, 183]', function () {
      this.slow(0);
      this.timeout(1000);
      chai.expect(maxPrimeSum(100000)).to.deep.equal( [92951, 183] );
    });
  });

});