_ = require('underscore');

  function primeGen(num) {
    const primes = [];
    for (let i = 2; i < num; i++) {
      primes.push(i);
    }
    for (let j = 0; j < primes.length; j++) {
      for (let k = j + 1; k < primes.length; k++) {
        if (primes[k] % primes[j] === 0) {
          primes.splice(k, 1);
        }
      }
    }
    return primes;
  }

  function cumulativeSum(array) {
    const list = _.toArray(array);
    for (let i = 1; i < list.length; i++) {
      if (list.length < 2) {
        break;
      }
      list[i] += list[i - 1];
    }
    return list;
  }

  function maxPrimeSum(num){

    const returnVal = new Array(0);
    const primes = primeGen(num);
    let primeList;
    let sum = [];

    let i = 2;
    while( i < primes.length ){
      primeList = primes.slice(0, i);
      sum = cumulativeSum(primeList);

      if(_.last(sum) > num){ break; }
      if(primes.indexOf(sum[sum.length-1]) >= 0){
        returnVal.push(_.object([ 'primeNum', 'length' ], [sum[sum.length-1], sum.length]));
      }

      while( primeList.shift() ){
        sum = cumulativeSum(primeList);
        if(_.last(sum) > num){ break; }
        if(primes.indexOf(sum[sum.length-1]) >= 0){
          returnVal.push(_.object([ 'primeNum', 'length' ], [sum[sum.length-1], sum.length]));
        }
      }
      i++;

    }
    var obj =  _.max(returnVal, function(pair){ return pair.length; });
    return [obj.primeNum, obj.length];
  }

  console.log(maxPrimeSum(1000));