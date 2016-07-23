# de-promisify
we all enjoy the convenience of ES6 / A+ Promises; yet once in a while, an asynchronous function in our stack still requires a callback.

This "de-promisify" module aims to solve that omg-headache by simply unwrapping an ES6 /  A+ Promise into the good 'ol error-first callback days of our youth.
### Version
0.0.4
### Installation
Native ES6 Promises is required therefore Node v4.2.4+
```sh
$ npm i de-promisify
```
### Usage
```javascript

const fs = require('fs');
const bluebird = require('bluebird');
const readFileAsync = bluebird.promisify(fs.readFile);
const testAsync = de_promisify(readFileAsync);

testAsync(path.resolve(__dirname, './sample.txt'), 'utf8', function (err, data){
    if(err) {
      //do something with this error
      console.log(`error is: ${err}`);
    }
    else {
      //do something on success
      console.log(`success: ${data}`);
    }
});


```
### Testing
```sh
$ npm i de-promisify
$ cd ./node_modules/de-promisify
$ npm i
$ npm test
```

License
----

MIT