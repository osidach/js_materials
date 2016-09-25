var proxyExample = new Proxy([
  { name: 'A', type: 'a' },
  { name: 'B', type: 'b' },
  { name: 'C', type: 'c' }
], {
  get: function (target, key) {
    console.log('Get: ', target, key);
    return target[key] || target.getItem(key) || undefined;
  },
  set: function (target, key, value) {
    console.log('Set: ', target, key, value);
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty: function (target, key) {
    console.log('Delete: ', target, key);
    if (key in target) {
      return false; 
    }
    return target.removeItem(key);
  },
  enumerate: function (target, key) {
    console.log('Enumerate: ', target, key);
    return target.keys();
  },
  ownKeys: function (target, key) {
    console.log('Own keys: ', target, key);
    return target.keys();
  },
  has: function (target, key) {
    console.log('Has: ', target, key);
    return key in target || target.hasItem(key);
  },
  defineProperty: function (target, key, desc) {
    console.log('Define property: ', target, key);
    if (desc && 'value' in desc) {
      target.setItem(key, desc.value);
    }
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

console.log(proxyExample.D = 'd');
console.log(proxyExample.getItem('D'));

proxyExample.setItem('E', 'e');
console.log(proxyExample.e);
