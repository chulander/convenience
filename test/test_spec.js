'use strict';

require('mocha');
const path = require('path');
const chai = require('chai');
const expect = chai.expect;
const de_promisify = require(path.resolve(__dirname, '../index'));
const fs = require('fs');
const bluebird = require('bluebird');

describe('de-promisfy', function (){
  this.timeout(7000);
  let successData;
  before(function (done){
    fs.readFile(path.resolve(__dirname, './sample.txt'), 'utf8', function (err, data){
      if(err) done(err);
      else {
        successData = data;
        done();
      }
    });
  });
  describe('functionality', function (){
    it('Should be an function', function (){
      expect(typeof de_promisify === 'function').to.be.true;
    });
    it('Should throw an error when called with a non-object', function (){
      try {
        let a = de_promisfy(function (){});
      }
      catch (e) {
        expect(e instanceof Error).to.be.true;
      }
    });
    it('Should accept a callback as the last argument', function (done){
      this.timeout(7000);
      const readFileAsync = bluebird.promisify(fs.readFile);
      const testAsync = de_promisify(readFileAsync);

      testAsync(path.resolve(__dirname, './sample.txt'), 'utf8', function (err, data){
        if(err) done(err);
        else(data === successData) ? done() : done(new Error('text is not the same'))
      })
    });
  });
});
