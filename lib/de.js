'use strict';

const dePromisify = function dePromisify (fn){
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
};

const deClass = function deClass(fn) {
  
}

module.exports = {
  dePromisify
}