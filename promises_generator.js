var p1 = function() {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      resolve('FIRST PROMISE');
    }, 2000);
  });
};

var p2 = function() {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      resolve('SECOND PROMISE');
    }, 2000);
  });
};

var p3 = function() {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      resolve('THIRD PROMISE');
    }, 2000);
  });
};

function* main() {
  var res1 = yield p1();
  var res2 = yield p2(res1);
  var res3 = yield p3(res2);
};

var runner = function(generator, nextValue) {
  console.log('Generator is running.');
  var result = generator.next();
  console.log('Generator result: ', result);
  if (result.value) {
    console.log('Value: ', result.value);
    result.value.then(function(nextValue) {console.log(nextValue); runner(generator, nextValue);});
  }
};

var gen = main();
runner(gen);
