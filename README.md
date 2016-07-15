# de-promisify
we all enjoy the convenience of Promises, yet once in a while we come across an asynchronous function that still requires an error-first callback; hence this module aims to solve that omg-headache by simply unwrapping a Promise back to the good 'ol callback days of our youth.
### Version
0.0.2
### Installation
Native Promises were available starting with Node v4.2.4, therefore, you must use that or greater
```sh
$ npm i de-promisify
```
### Usage
```javascript
/*
Just pass in the Promise as an argument
*/
const testAsync = de_promisify(readFileAsync);
testAsync(path.resolve(__dirname, './sample.txt'), 'utf8', function (err, data){
    if(err) handleError(err);
    else handleSuccess(data);
})


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


License
----

MIT
