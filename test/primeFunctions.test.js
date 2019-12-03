const chai = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
// const primeGen = require('../primeFunctions');
// const cumulativeSum = require('../primeFunctions');
// const maxPrimeSum = require('../primeFunctions');
// import {primeGen} from '../primeFunctions';
// import {cumulativeSum} from '../primeFunctions';
// import {maxPrimeSum} from '../primeFunctions';
// import primeFunctions;
const pf = require('../primeFunctions');

let primeFuncs = pf;

describe('Test for Correctness', function () {
  describe('primeGen', function () {
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.expect(pf.primeGen(10)).to.deep.equal([2,3,5,7]);
    });
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
      chai.expect(primeGen(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });

  describe('cumulativeSum', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]', function () {
      chai.expect(cumulativeSum([1,2,3,4])).to.deep.equal([1, 3, 6, 10]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.deep.equal([10, 21, 33, 46, 60]);
    });
  });

  describe('maxPrimeSum', function () {
    it('maxPrimeSum(100) = [41,6]', function () {
      chai.expect(maxPrimeSum(100)).to.have.deep.members({primeNum: 41, length: 6});
    });
    it('maxPrimeSum(1000) = [953, 21]', function () {
      chai.expect(maxPrimeSum(1000)).to.have.deep.members({primeNum: 953, length: 21});
    });
  });
});

