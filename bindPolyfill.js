var bind = function(fn, context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var internalArgs = Array.prototype.slice.call(arguments),
            newArgs = args.concat(internalArgs);
            return fn.call(context, newArgs);
    };
};

Function.prototype.bind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Is not a function.');
    }
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var internalArgs = Array.prototype.slice.call(arguments),
            newArgs = args.concat(internalArgs);
            return fn.call(context, newArgs);
    };
};
