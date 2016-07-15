'use strict';

require('mocha');
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const Reminisce = require(path.resolve(__dirname, '../index'));
const fs = require('fs');

const Promisify = function Promisify (fn, receiver){
  if(!fn || typeof fn !== 'function') throw new TypeError('ERROR: promisify must be called with a function');
  return (...args) => new Promise((resolve, reject) =>{
    args.push(function (err, data){
      if(err) reject(err);
      else resolve(data);
    });
    Reflect.apply(fn, receiver, args);
  });
}

describe('Reminisce test', function (){
  describe('Basic assertions', function (){
    it('Should be an object', function (){
      expect(typeof Reminisce === 'object').to.be.true;
    });
    it('Should have the property "de"', function (){
      expect(Reminisce.de).to.be.exist;
    });
  });
  describe('dePromisify', function (){
    this.timeout(7000);
    let successData;
    before(function (done){
      fs.readFile(path.resolve(__dirname,'./sample.txt'), 'utf8', function (err, data){
        if(err){
          done(err);
        }
        else {
          successData = data;
          done();
        }
      });
    });
    describe('basic functionality', function (){
      it('Should throw an error when called with a non-object', function (){
        try {
          let a = Reminisce.de.dePromisify(function (){});
        }
        catch (e) {
          expect(e instanceof Error).to.be.true;
        }
      });
      it('Should accept a callback as the last argument', function (done){
        this.timeout(7000);
        fs.readFileAsync = Promisify(fs.readFile);
        let test = Reminisce.de.dePromisify(fs.readFileAsync);

        test(path.resolve(__dirname,'./sample.txt'), 'utf8', function (err, data){
          if(err){
            done(err);
          }
          else {
            (data === successData) ? done() : done(new Error('text is not the same'))
          }
        })
      });
    });
  });
});
