var proxyExample = new Proxy({
  a: 1,
  b: 2,
  c: 3,
  d: 4
}, {
  get: function (target, key) {
    console.log('Get: ', target, key);
    return target[key] || undefined;
  },
  set: function (target, key, value) {
    console.log('Set: ', target, key, value);
    if (key in target) {
      return false;
    }
    return true;
  },
  deleteProperty: function (target, key) {
    console.log('Delete: ', target, key);
    if (key in target) {
      return false; 
    }
    return true;
  },
  enumerate: function (target, key) {
    console.log('Enumerate: ', target, key);
    return target;
  },
  ownKeys: function (target, key) {
    console.log('Own keys: ', target, key);
    return target;
  },
  has: function (target, key) {
    console.log('Has: ', target, key);
    return key in target || undefined;
  },
  defineProperty: function (target, key, desc) {
    console.log('Define property: ', target, key);
    return target;
  },
  getOwnPropertyDescriptor: function (target, key) {
    console.log('Get own prop desc: ', target, key);
    var localValue = target.getItem(key);
    return localValue ? {
      value: localValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  }
});

proxyExample.a;
delete proxyExample.b;

proxyExample.D = 'd';
proxyExample.D;

proxyExample.E = 'e';
proxyExample.e;
