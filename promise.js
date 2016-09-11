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

// no chance to use "throw 'Error';" in promise because it's an asynchronous operation
// try - throw - catch chain works only in the synchronous operations
