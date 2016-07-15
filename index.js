'use strict';

module.exports = function(fn){
  if(!fn || typeof fn !== 'function') throw new TypeError('error: dePromisify must be called with a function');
  return function (...args){
    const cb = args.pop();
    Promise
    .resolve(fn)
    .then(trustedFn=>{
      trustedFn(...args);
      try {
        return trustedFn(...args);
      } catch (e) {
        return new TypeError('error: the last argument is not a function');
      }
    })
    .then(data=>{
      console.log('TEST', data);
      cb(null, data)
    })
    .catch(err=>cb(err));
  };
}
