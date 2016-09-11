var curry = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var internalArgs = Array.prototype.slice.call(arguments),
            newArgs = args.concat(internalArgs);
            return fn.call(null, newArgs);
    };
};
