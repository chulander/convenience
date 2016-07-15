# de-promisify
we all like the convenience of using Promises yet once in a while a function still needs to accept a callback; hence this tiny function simply de-promisifies and unwraps a Promise back to the good 'ol callback that we've grown to love.
### Version
0.0.1
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
    if(err) done(err);
    else(data === successData) ? done() : done(new Error('text is not the same'))
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
