// ----------------- Promise -----------------
var ajax = function(url) {
    return new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.send();
        client.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(this.response);
            } else {
                reject(this.statusText);
            }
        };
        client.onerror = function() {
            reject(this.statusText);
        };
    });
};

ajax('http://example.com/get').then(function(data) {
    console.log('Resolved: ', data);
}, function(error) {
    console.log('Error: ', error);
});

// ----------------- Promise Catch -----------------
var time = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // throw 'Error in asynchronous promise';
            // Will be "Uncaught Error in asynchronous promise" in then()
            resolve('success');
        }, 3000);
    });
};
// no chance to use "throw 'Error';" in promise because it's an asynchronous operation
// try - throw - catch chain works only in the synchronous operations

time().then(function(data) {
    console.log('Resolved: ', data);
    throw {
        msg: 'Something happened in resolve'
    };
}, function(error) {
    console.log('Error: ', error);
}).catch(function(error) {
    console.log('Error: ', error.msg);
});

// ----------------- Promise All Reject -----------------
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('success');
    }, 3000);
});
var promise2 = function() new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('error');
    }, 3000);
});
var promise3 = Promise.reject('error2');

// Promise.all is rejected if one of the elements is rejected
Promise.all([promise1, promise2, promise3]).then(function(dataArr) {
    console.log('Resolve array: ', dataArr);
}, function(dataErr) {
    console.log('Reject array: ', dataErr);
});

// ----------------- Promise All Resolve -----------------
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('success1');
    }, 3000);
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('success2');
    }, 6000);
});

// Promise.all is resolved when all promises are resolved 
// (or if anyone of them is rejected)
Promise.all([promise1, promise2]).then(function(dataArr) {
    console.log('Resolve array: ', dataArr);
}, function(dataErr) {
    console.log('Reject array: ', dataErr);
});
