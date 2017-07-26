function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not a number');
    }
  });
}

addPromise(5, 7).then(function(sum) {
  console.log('sucess', sum);
}, function(err) {
  console.log(err);
});

addPromise('a', 's').then(function(sum) {
  console.log('sucess', sum);
}, function(err) {
  console.log(err);
});
