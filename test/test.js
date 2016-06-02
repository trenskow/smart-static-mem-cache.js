/*jshint expr: true*/

'use strict';

const expect = require('chai').expect;
const MemoryCache = require('../');

const cache = new MemoryCache();

describe('cache', function() {

  it ('should set data without error', function() {
    expect(cache.set('test', { created: new Date() })).to.be.fulfilled;
  });

  it ('get data without error and correct format', function() {
    return cache.get('test').then((data) => {
      expect(data).to.be.an('object');
      expect(data.created).to.be.instanceof(Date);
    });
  });

});
